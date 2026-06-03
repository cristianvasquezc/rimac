import type { PlansResponse, User } from '@/types';
import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL!,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const userService = {
  async getUser(): Promise<User> {
    const response = await api.get<User>('/user.json');
    return response.data;
  },
};

export const plansService = {
  async getPlans(): Promise<PlansResponse> {
    const response = await api.get<PlansResponse>('/plans.json');
    return response.data;
  },
};
