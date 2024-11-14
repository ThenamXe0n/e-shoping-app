import axios from "axios";

export const fetchProductAPI = async () => {
  try {
    const response = await axios.get(
      "https://instructor-api-xi.vercel.app/api/product/allproducts"
    );
    const data = response.data;
    return data;
  } catch (error) {
    return { status: false };
  }
};
export const addProductAPI = async (productToAdd) => {
  try {
    const response = await axios.post(
      "https://instructor-api-xi.vercel.app/api/product/add",productToAdd
    );
    
    return productToAdd;
  } catch (error) {
    return { status: false };
  }
};
