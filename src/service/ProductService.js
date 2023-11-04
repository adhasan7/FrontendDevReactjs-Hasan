import axios from "axios";

export async function GetProducts() {
  const response = await axios.get("https://dummyjson.com/products");
  return response.data;
}
export async function GetDetail(id) {
  const response = await axios.get("https://dummyjson.com/products/" + id);
  return response.data;
}
