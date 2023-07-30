/* eslint-disable @typescript-eslint/no-explicit-any */
import Axios from 'axios'

const { VITE_API_URL } = import.meta.env
declare module 'axios' {
  export interface AxiosRequestConfig {
    doRetry?: boolean
  }
}

export const axios = Axios.create({
  baseURL: `${VITE_API_URL}/v1`,
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  },
  responseType: 'json',
  withCredentials: true,
  doRetry: true,
})
