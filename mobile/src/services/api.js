import axios from 'axios'

const api = axios.create({
    baseURL: 'https://us-central1-studyhub-9f612.cloudfunctions.net'
})

export default api