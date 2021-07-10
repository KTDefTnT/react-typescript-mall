import request from '@/utils/request';

export function editCart() {
  return request('/api/cart/edit', {
    method: 'POST',
  });
}
