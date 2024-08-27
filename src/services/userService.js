import { handleError } from "../utils/helper";
import { authInstance } from "./instance";

export const register = async (userData) => {
  try {
    const response = await authInstance.post("register", userData);

    return { success: true, data: response };
  } catch (error) {
    handleError(error);
    return { success: false, error: error };
  }
};

//Signin
export const login = async (userData) => {
  try {
    const response = await authInstance.post("login", userData);
    return { success: true, data: response };
  } catch (error) {
    handleError(error);
    return { success: false, error: error };
  }
};
