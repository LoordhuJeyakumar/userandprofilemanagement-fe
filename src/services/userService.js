import { handleError } from "../utils/helper";
import { authInstance, protectedInstance } from "./instance";

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

//Check Accesstoken
export const checkAccessToken = async () => {
  try {
    const response = await protectedInstance.get("/user/protected-route");
    return { success: true, data: response };
  } catch (error) {
    handleError(error);
    return { success: false, error: error };
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
};

export const getUerDetails = async () => {
  try {
    const response = await protectedInstance.get("/user/getUser");
    return { success: true, data: response };
  } catch (error) {
    handleError(error);
    return { success: false, error: error };
  }
};

//Update User
export const updateUser = async (userData) => {
  try {
    const response = await protectedInstance.put("/user/updateUser", userData);
    return { success: true, data: response };
  } catch (error) {
    handleError(error);
    return { success: false, error: error };
  }
};

//Change Password
export const changePassword = async (userData) => {
  try {
    const response = await protectedInstance.put(
      "/user/changePassword",
      userData
    );
    return { success: true, data: response };
  } catch (error) {
    handleError(error);
    return { success: false, error: error };
  }
};

//Deactivate User
export const deactivateUser = async () => {
  try {
    const response = await protectedInstance.put(
      "/user/deactivateUser",
    );
    return { success: true, data: response };
  } catch (error) {
    handleError(error);
    return { success: false, error: error };
  }
};

//Delete User and Profile
export const deleteUserAndProfile = async () => {
  try {
    const response = await protectedInstance.delete(
      "/user/deleteUserAndProfile",
    );
    return { success: true, data: response };
  } catch (error) {
    handleError(error);
    return { success: false, error: error };
  }
};
