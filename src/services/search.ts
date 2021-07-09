import { QueryType } from '@/@types/search';
import request from '@/utils/request';

export function queryList(params: QueryType) {
  return request('/api/search', {
    method: 'POST',
    data: params,
  });
}
