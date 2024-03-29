import request from '@/utils/request';

// 获取当前用户
export async function getCurrentUser(): Promise<any> {
  return request('/api/currentUser');
}

// 获取当前用户详情信息
export async function getUserDetail(): Promise<any> {
  return request('/api/getUserDetail');
}

// 获取当前用户地址信息
export async function getUserAddress(): Promise<any> {
  return request('/api/getUserAddress');
}
