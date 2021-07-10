import request from '@/utils/request';

export function getProductById(id: string) {
  return request('/api/product', {
    method: 'POST',
    data: { id },
  });
}
