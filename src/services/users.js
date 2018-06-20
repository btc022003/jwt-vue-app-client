import request from '../utils/request';
import { serverUrl } from '../utils/config';

export function reg(payload) {
  return request.post(`${serverUrl}/signup`, payload);
}

export function login(payload) {
  return request.post(`${serverUrl}/signin`, payload);
}
