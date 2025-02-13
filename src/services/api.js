import axios from "axios";

const API_URL = "http://localhost:3000/orders";

export const fetchOrders = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const updateOrder = async (id, updates) => {
  await axios.patch(`${API_URL}/${id}`, updates);
  return response.data; 
};
