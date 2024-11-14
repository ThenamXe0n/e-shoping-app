import axios from "axios";

export const fetchAllProductsAPI = async () => {
  try {
    const response = await axios.get("http://localhost:8080/allproducts");
    const data = response.data
    return data
  } catch (error) {
    console.error(error.message);
  }
};
