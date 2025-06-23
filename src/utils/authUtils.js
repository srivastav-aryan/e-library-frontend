import { setCredentials } from "../features/auth/authSlice.js";
import { store } from "../Store/store.js";

export const saveAuthInfoToLocalStorage = (token) => {
  try {
    localStorage.setItem("accessToken", token);
    store.dispatch(setCredentials({ token }));
  } catch (error) {
    console.log(
      `Error in setting the token and user in localstorage : ${error}`
    );
  }
};

export const loadAuthInfoFromLocalStorage = () => {
  try {
    const token = localStorage.getItem("accessToken");

    if (token) {
      store.dispatch(setCredentials({ token }));
    }
  } catch (error) {
    console.log(`Error in loading the token from localstorage : ${error}`);
  }
};

export const removeAuthInfoFromLocalStorage = () => {
  try {
    localStorage.removeItem("accessToken");
  } catch (error) {
    console.log(
      `Error in removing the token and user from localstorage : ${error}`
    );
  }
};
