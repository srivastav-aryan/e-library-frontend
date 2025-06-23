import axios from "axios";
import { store } from "../Store/store";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const loginMethod = (data) => api.post("/api/users/login", data);

export const registerMethod = (data) => api.post("/api/users/register", data);

export const createBook = (data) => api.post("/api/books/" , data , {
  headers: {
    "Content-Type": "multipart/form-data",
    'Authorization': `Bearer ${store.getState().auth.token}`
  }
})

export const getAllBooks = () => api.get("/api/books/");
