import request from '@/utils/request';

export function getGoodsList() {
  return request('/api/getGoodsList');
}
