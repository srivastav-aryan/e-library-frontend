import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginMethod = (data) => api.post("/api/users/login", data);

export const registerMethod = (data) => api.post("/api/users/register", data);

export const getAllBooks = () => api.get("/api/books/");
