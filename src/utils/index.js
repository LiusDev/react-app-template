import axios from "axios"

const PORT = 9898

export const instance = axios.create({
    baseURL: `http://localhost:${PORT}`,
})
