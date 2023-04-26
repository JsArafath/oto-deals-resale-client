import React from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "../CategoryCard/CategoryCard";
import { Link } from "react-router-dom";
import './Categories.css'

const Categories = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: () =>
      fetch(" https://oto-deals-resell-server.onrender.com/categories").then((res) =>
        res.json()
      ),
  });
  return (
    <div className="mt-9 pt-9">
      <h1 className="text-4xl mt-4 font-bold text-gray-800 text-center">
        Browse By Category
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 p-9 ml-2">
        {categories.slice(0,6).map((category) => (
          <CategoryCard
            key={category.category_id}
            category={category}
          ></CategoryCard>
        ))}
      </div>
      <div className="flex justify-center">
        <Link 
        className="px-3 py-2  rounded-xl bg-sky-500 font-bold text-white"
        to='/allcategories'>
          View All
        </Link>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default Categories;




