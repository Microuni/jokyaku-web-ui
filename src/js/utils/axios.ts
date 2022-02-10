import _axios, { AxiosDefaults, AxiosInstance } from "axios"
import { API_URL } from "../config/base"

type ToastConfig = {
  call: CallableFunction
  success: string
  error: string
}

interface CustomAxios extends AxiosInstance {
  defaults: AxiosDefaults & {
    toast?: ToastConfig
  }
  withToast: (toast: ToastConfig) => CustomAxios
}

const token = localStorage.getItem("token")

const axios = _axios.create({
  baseURL: API_URL,

  timeout: 3000,

  headers: {
    Authorization: token ? `Bearer ${localStorage.getItem("token")}` : "",
  },
}) as CustomAxios

axios.withToast = function (toast: ToastConfig) {
  this.defaults.toast = toast

  return this
}

axios.interceptors.response.use(
  (response) => {
    if (
      axios.defaults.toast &&
      response.config.method &&
      ["delete", "put", "patch", "post"].includes(response.config.method)
    ) {
      axios.defaults.toast.call({
        message: axios.defaults.toast.success,
        status: "success",
        position: "bottom-right",
      })

      delete axios.defaults.toast
    }

    return response
  },
  (error) => {
    if (axios.defaults.toast) {
      axios.defaults.toast.call({
        message: axios.defaults.toast.error,
        status: "error",
        position: "bottom-right",
      })

      delete axios.defaults.toast
    }

    return Promise.reject(error)
  }
)

// @ts-ignore
window.axios = axios

export default axios
