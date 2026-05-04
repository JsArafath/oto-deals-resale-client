import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductsByCategoryQuery } from "../../features/product/productApi";


const CategoryProducts = () => {
  const { categoryId } = useParams();

  const { data = [], isLoading, isError } =
    useGetProductsByCategoryQuery(categoryId);

  if (isLoading) return <p className="text-center py-10">Loading...</p>;
  if (isError) return <p className="text-center py-10">Error loading products</p>;

  return (
    <div className="w-[90%] mx-auto py-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        {categoryId} Products
      </h1>

      {data.length === 0 ? (
        <p className="text-center text-gray-500 font-semibold">
          No products found
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {data.map((product) => (
            <div key={product._id} className="card bg-white shadow-xl">
              <figure className="h-52 bg-gray-100">
                <img
                  src={product.img || product.image}
                  alt={product.name}
                  className="h-full w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p>Price: ৳{product.price}</p>
                <p>Location: {product.location}</p>
                <p>Condition: {product.condition}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProducts;