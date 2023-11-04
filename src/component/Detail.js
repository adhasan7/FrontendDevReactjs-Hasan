import { useEffect, useState } from "react";
import { GetDetail } from "../service/ProductService";
import Header from "./Header";
import ProductCard from "./ProductCard";
import { useParams } from "react-router-dom";

function Detail() {
  const param = useParams();
  const productId = param.id;
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const product = await GetDetail(productId);
      setData(product);
    };

    fetchData();
  }, [productId]);

  return (
    <div>
      <Header />

      <div>
        <h1>Restaurant Data</h1>
        <div>{data.title}</div>
      </div>
    </div>
  );
}
export default Detail;
