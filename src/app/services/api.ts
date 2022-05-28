import axios from 'axios'

import { apiUrl } from './config'

const instance = axios.create({
  baseURL: apiUrl,
})

if (__DEV__) {
  axios.interceptors.request.use(
    (config) => {
      console.log(`Sending request to ${config.baseURL}${config.url}`)
      console.log('config => ', config)
      return config
    },
    (error) => {
      console.log('Request error => ', error)
      return Promise.reject(error)
    },
  )
  axios.interceptors.response.use(
    (response) => {
      console.log(
        'Received response from ',
        response.config.baseURL,
        response.config.url,
      )
      console.log('response => ', response)
      return response
    },
    (error) => {
      console.log('Response error => ', error)
      return Promise.reject(error)
    },
  )
}

export default instance
