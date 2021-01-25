import sendRequest from './send-request';

const BASE_URL = '/api/brands';

export function getAll() {
  return sendRequest(`${BASE_URL}`);
}