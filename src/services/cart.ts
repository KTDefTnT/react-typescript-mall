import request from '@/utils/request';

export function editCart() {
  return request('/api/cart/edit', {
    method: 'POST',
  });
}

export function getCart() {
  return request('/api/getCart');
}
