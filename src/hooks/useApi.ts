import { userService } from '@/services/api';
import { useAppStore } from '@/store/useAppStore';
import type { QuoteFormData } from '@/types';
import { useMutation } from '@tanstack/react-query';
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
