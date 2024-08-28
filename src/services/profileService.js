import { handleError } from "../utils/helper";
import { protectedInstance } from "./instance";

export const getProfileDetails = async () => {
  try {
    const response = await protectedInstance.get("/profile/getProfile");
    return { sucess: true, data: response };
  } catch (error) {
    console.log(error);
    handleError(error);
    return { success: false, error: error };
  }
};

//Update Profile
export const updateProfile = async (profileData) => {
  try {
    const response = await protectedInstance.put(
      "/profile/updateProfile",
      profileData
    );
    return { success: true, data: response };
  } catch (error) {
    handleError(error);
    return { success: false, error: error };
  }
};
