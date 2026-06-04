export interface User {
  name: string;
  lastName: string;
  birthDay: string;
}

export interface Plan {
  name: string;
  price: number;
  description: string[];
  age: number;
}

export interface PlansResponse {
  list: Plan[];
}

export interface QuoteFormData {
  documentType: 'dni' | 'ce';
  document: string;
  phone: string;
  privacyPolicy: boolean;
  marketingConsent?: boolean;
}

export type UserType = 'for-me' | 'for-someone-else';

export interface AppState {
  quoteFormData: QuoteFormData | null;
  setQuoteFormData: (data: QuoteFormData) => void;

  user: User | null;
  setUser: (user: User) => void;

  userType: UserType | null;
  setUserType: (type: UserType) => void;

  plans: Plan[];
  setPlans: (plans: Plan[]) => void;

  selectedPlan: Plan | null;
  setSelectedPlan: (plan: Plan) => void;

  calculateUserAge: () => number | null;

  reset: () => void;
}
