import { plansService, userService } from '@/services/api';
import { useAppStore } from '@/store/useAppStore';
import type { QuoteFormData } from '@/types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export function useUser() {
  const { setUser, setQuoteFormData } = useAppStore();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: async (formData: QuoteFormData) => {
      const user = await userService.getUser();
      return { user, formData };
    },
    onSuccess: (data) => {
      setQuoteFormData(data.formData);
      setUser(data.user);
      navigate('/planes');
    },
  });

  return {
    fetchUser: mutation.mutate,
    isLoading: mutation.isPending,
    error: mutation.error ? mutation.error.message || 'Ocurrió un error' : null,
  };
}

export function usePlans(enabled: boolean = true) {
  const { setPlans } = useAppStore();

  const query = useQuery({
    queryKey: ['plans'],
    queryFn: plansService.getPlans,
    select: (data) => data.list,
    enabled,
  });

  useEffect(() => {
    if (query.data) {
      setPlans(query.data);
    }
  }, [query.data, setPlans]);

  return {
    plans: query.data || [],
    isLoading: query.isLoading,
    error: query.error ? query.error.message || 'Ocurrió un error' : null,
    refetch: query.refetch,
  };
}
