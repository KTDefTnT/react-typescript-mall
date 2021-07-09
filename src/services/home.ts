import request from '@/utils/request';

export function getRecommendList() {
  return request('/api/getRecommend');
}
