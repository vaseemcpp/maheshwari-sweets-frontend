import axios from 'axios';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
export const API_URL = `${BACKEND_URL}/api/users/`;

// Register User
const register = async (userData) => {
    const response = await axios.post(API_URL + "register", userData, {
        withCredentials:true,
    })
    return response.data
} 

// Login User
const login = async (userData) => {
    const response = await axios.post(API_URL + "login", userData, {
      withCredentials: true,
    });
    return response.data;
  };

  // Logout User
const logout = async () => {
    const response = await axios.get(API_URL + "logout");
    return response.data.message;
  };
  
// Get Login Status
const getLoginStatus = async () => {
    const response = await axios.get(API_URL + "getLoginStatus");
    return response.data;
  };
  
  // Get user profile
const getUser = async () => {
  const response = await axios.get(API_URL + "getUser");
  return response.data;
};

// Update profile
const updateUser = async (userData) => {
  const response = await axios.patch(API_URL + "updateUser", userData);
  return response.data;
};

// Update Photo
const updatePhoto = async (userData) => {
  const response = await axios.patch(API_URL + "updatePhoto", userData);
  return response.data;
};

// aDD TO WISHLIST
const addToWishlist = async (productData) => {
  const response = await axios.post(API_URL + "addToWishlist", productData, {
    withCredentials: true,
  });
  return response.data.message;
};

// Get Wishlist
const getWishlist = async () => {
  const response = await axios.get(API_URL + "getWishlist");

  return response.data;
};

// Remove From Wishlist
const removeFromWishlist = async (productId) => {
  const response = await axios.put(API_URL + `wishlist/${productId}`);

  return response.data.message;
};

const authService ={
    register,
    login,
    logout,
    getLoginStatus,
    getUser,
    updateUser,
    updatePhoto,
    addToWishlist,
    getWishlist,
    removeFromWishlist,
}
export default authService;