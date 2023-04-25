import React from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "../CategoryCard/CategoryCard";
import { Link } from "react-router-dom";

const AllCategories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(" http://localhost:5000/categories").then((res) =>
        res.json()
      ),
  });
  return (
    <div>
      <h1 className="text-4xl mt-4 font-bold text-gray-800 text-center">
       All Categories
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 p-9 ml-2">
        {categories.map((category) => (
          <CategoryCard
            key={category.category_id}
            category={category}
          ></CategoryCard>
        ))}
       
        
      </div>
    </div>
  );
};

export default AllCategories;
