import sendRequest from './send-request';

const BASE_URL = '/api/drinks';

export function getAll() {
  return sendRequest(`${BASE_URL}`);
}