import React, { useEffect, useMemo, useState } from "react";

import Header from "./Header";
import { GetProducts } from "../service/ProductService";
import ProductCard from "./ProductCard";
import Filter from "./Filter";
import { useLocation } from "react-router-dom";
import qs from "qs";

function Main() {
  const location = useLocation();
  const [data, setData] = useState([]);
  const filters = useMemo(() => {
    var result = qs.parse(location.search, { ignoreQueryPrefix: true });
    return result;
  }, [location.search]);
  useEffect(() => {
    const fetchData = async () => {
      const product = await GetProducts(filters);
      setData(product.products);
    };

    fetchData();
  }, [location.search]);

  return (
    <div className='container mx-auto pd-5'>
      <div className='space-y-5'>
        <Header />
        <Filter />
      </div>

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
