import axios from "axios";

export const registerUserAPI = async(userInfo) => {
  try {
    const response = await axios.post(
      "https://instructor-api-xi.vercel.app/api/register",
      userInfo
    );
    const data = response.data;
    delete userInfo.password;
    return userInfo
  } catch (err) {
    return { status: false };
  }
};
export const logginUserAPI = async(userInfo) => {
  try {
    const response = await axios.post(
      "https://instructor-api-xi.vercel.app/api/login",
      userInfo
    );
    const data = response.data;
    console.log("response by api ",response)
    return data
  } catch (err) {
    return { status: false };
  }
};
