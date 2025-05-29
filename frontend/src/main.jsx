import React from "react"
import ReactDOM from "react-dom/client"
import axios from "axios"
import App from "./App"

axios.defaults.baseURL = "https://tiffinbox-sqem.onrender.com"
axios.defaults.withCredentials = true
axios.defaults.headers.common["Content-Type"] = "application/json"
axios.defaults.headers.common["Access-Control-Allow-Credentials"] = true
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "https://tiffinbox321.netlify.app"

axios.interceptors.request.use(
    (config) => {
        console.log("API Request:", config.method.toUpperCase(), config.url, config.data)
        return config
    },
    (error) => {
        console.error("Request Error:", error)
        return Promise.reject(error)
    },
)

axios.interceptors.response.use(
    (response) => {
        console.log("API Response:", response.status, response.data)
        return response
    },
    (error) => {
        console.error("Response Error:", error.response?.status, error.response?.data || error.message)
        return Promise.reject(error)
    },
)

const token = localStorage.getItem("token")
if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)
