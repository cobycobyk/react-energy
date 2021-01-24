import sendRequest from './send-request';

const BASE_URL = '/api/drinks';

export function getAll() {
  return sendRequest(`${BASE_URL}`);
}

export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`)
}

export function create(drink) {
  return sendRequest(`${BASE_URL}/new`, 'POST', {drink})
}