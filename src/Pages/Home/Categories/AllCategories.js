import React from "react";
// import { useQuery } from "@tanstack/react-query";
import CategoryCard from "../CategoryCard/CategoryCard";
// import { Link } from "react-router-dom";
import { useProductGetQuery } from "../../../features/category/categoryApi";
import Loading from "../../Loading/Loading";
import './AllCategories.css'

const AllCategories = () => {

  const {data,isLoading,isError} =useProductGetQuery();
  console.log(data)

  let content = null;

    if(isLoading && !isError){
        content = <div><Loading></Loading></div>
    }
    if(!isLoading && isError){
        content = <p>An error occured</p>
    }
    if(!isLoading && !isError && data.length ===0){
        content = <p>No Data Found</p>
    }
    if(!isLoading && !isError && data.length>0){
      content = 
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 mb-9 w-[80%] mx-auto items-center justify-center gap-y-10 lg:gap-y-0">
      {data?.map((category) => (
        <CategoryCard
          key={category.category_id}
          category={category}
        ></CategoryCard>
      ))}
     
      
    </div>
  }
    
  return (
    <div className="mt-2 mb-5">
      <h1 className="text-4xl mt-4 mb-5 font-bold text-gray-800 text-center">
       All Categories
      </h1>
      {content}
      
    </div>
  );
};

export default AllCategories;
