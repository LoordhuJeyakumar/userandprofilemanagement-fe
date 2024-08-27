import { handleError } from "../utils/helper";
import { authInstance } from "./instance";

export const register = async (userData) => {
  try {
    console.log(userData);

    const response = await authInstance.post("user/register", userData);

    return { success: true, data: response };
  } catch (error) {
    handleError(error);
    return { success: false, error: error };
  }
};

//Signin
export const login = async (userData) => {
  try {
    const response = await authInstance.post("user/login", userData);
    console.log(response);
    if (response.status === 200) {
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data));
    }

    return { success: true, data: response };
  } catch (error) {
    handleError(error);
    return { success: false, error: error };
  }
};

//Verify Email
export const verifyEmail = async (id, token) => {
  try {
    const response = await authInstance.get(`/user/verify/${id}/${token}`);
    return { success: true, data: response };
  } catch (error) {
    handleError(error);
    return { success: false, error: error };
  }
};
