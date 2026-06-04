import type { AppState, Plan, QuoteFormData, User, UserType } from '@/types';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

function calculateAge(birthDay: string): number {
  const [day, month, year] = birthDay.split('-').map(Number);
  const birthDate = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < day)) {
    age--;
  }
  return age;
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      quoteFormData: null,
      setQuoteFormData: (data: QuoteFormData) => set({ quoteFormData: data }),

      user: null,
      setUser: (user: User) => set({ user }),

      userType: null,
      setUserType: (type: UserType) => set({ userType: type }),

      plans: [],
      setPlans: (plans: Plan[]) => set({ plans }),

      selectedPlan: null,
      setSelectedPlan: (plan: Plan) => set({ selectedPlan: plan }),

      calculateUserAge: () => {
        const { user } = get();
        if (!user) return null;
        return calculateAge(user.birthDay);
      },

      reset: () =>
        set({
          quoteFormData: null,
          user: null,
          userType: null,
          plans: [],
          selectedPlan: null,
        }),
    }),
    {
      name: 'rimac-quote-store',
      partialize: (state) => ({
        quoteFormData: state.quoteFormData,
        user: state.user,
        userType: state.userType,
        plans: state.plans,
        selectedPlan: state.selectedPlan,
      }),
    },
  ),
);
