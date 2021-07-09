import { LoginParams } from '@/@types/login';
import request from '@/utils/request';

export function login(params: LoginParams) {
  return request('/api/login', {
    method: 'POST',
    data: params,
  });
}

export function logout() {
  return request('/api/logout');
}
