import axios from "axios";

const url =
  import.meta.env.SERVER_URL || "https://coderskidukaan.onrender.com/";

export const addUser = async (data) => {
  try {
    await axios.post(`${url}/api/v1/auth/signin`, data);
  } catch (error) {
    console.log("data getching error", error.message);
  }
};

export const getUser = async (data) => {
  try {
    const response = await axios.post(`${url}/api/v1/auth/login`, data);
    return response.data;
  } catch (error) {
    console.log("data getching error", error.message);
  }
};
export const userId = async (data) => {
  try {
    const response = await axios.post(`${url}/api/v1/auth/user`, data);
    return response.data;
  } catch (error) {
    console.log("data getching error", error.message);
  }
};
