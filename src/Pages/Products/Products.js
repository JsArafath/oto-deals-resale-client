import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookNowModal from "../BookNowModal/BookNowModal";
import ProductCard from "./ProductCard";
import ViewModal from "../BookNowModal/ViewModal";
const Products = () => {
  const [bookProduct, setBookProduct] = useState({});
  const products = useLoaderData();
  console.log(products);
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-3 p-5">
      {products?.map((product) => (
        <ProductCard
          key={product._id}
          setBookProduct={setBookProduct}
          product={product}
        ></ProductCard>
      ))}
      {bookProduct && (
        <BookNowModal
          setBookProduct={setBookProduct}
          bookProduct={bookProduct}
        ></BookNowModal>
      )}
      {bookProduct && (
        <ViewModal
          setBookProduct={setBookProduct}
          bookProduct={bookProduct}
        ></ViewModal>
      )}
    </div>
  );
};

export default Products;
