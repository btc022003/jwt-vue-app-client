import request from '../utils/request';
import { serverUrl } from '../utils/config';

export function fetch() {
  return request.get(`${serverUrl}/todos`, {});
}

export function create(payload) {
  return request.post(`${serverUrl}/todos`, payload);
}
