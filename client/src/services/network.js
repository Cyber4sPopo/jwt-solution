import { logout, tokenLocalStorageKey } from './auth';

export default function client(endpoint, {body, ...customConfig} = {}) {
  const token = window.localStorage.getItem(tokenLocalStorageKey)
  const headers = {'content-type': 'application/json'}
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }
  if (body) {
    config.body = JSON.stringify(body)
  }
  return window
    .fetch(`${endpoint}`, config)
    .then(async response => {
      if (response.status === 400) {
        logout()
        window.location.assign(window.location)
        return
      }
      const data = await response.json()
      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
}