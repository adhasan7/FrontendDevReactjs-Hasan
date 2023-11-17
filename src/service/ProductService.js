import axios from "axios";

export async function GetProducts(filter) {
  if (filter.search === undefined) {
    const response = await axios.get("https://dummyjson.com/products");
    return response.data;
  } else {
    const response = await axios.get(
      "https://dummyjson.com/products/search?q=" + filter.search
    );
    return response.data;
  }
}
export async function GetDetail(id) {
  const response = await axios.get("https://dummyjson.com/products/" + id);
  return response.data;
}
