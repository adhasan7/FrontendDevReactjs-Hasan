import React, { useEffect, useState } from "react";

import Header from "./Header";
import { GetProducts } from "../service/ProductService";
import ProductCard from "./ProductCard";
import Filter from "./Filter";

function Main() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const product = await GetProducts();
      setData(product.products);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <Filter />
      <div>
        <h1>Restaurant Data</h1>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-2 '>
          {data.map((item, index) => (
            <ProductCard product={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Main;
