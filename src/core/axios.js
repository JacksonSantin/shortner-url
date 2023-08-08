import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://shrtlnk.dev/api/v2/link",
  headers: {
    "api-key": "PQGQwwEGXWxfoH4mk3u3uNlsMk9lc8CM9UchGd6ZFpSCB",
    Accept: "application/json",
    "Content-Type": "application/json",
  }
})

export { axiosInstance }