import React from "react";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "../CategoryCard/CategoryCard";
import { useProductGetQuery } from "../../../features/category/categoryApi";
import { Link } from "react-router-dom";
import './Categories.css'
// import Loading from './../../Loading/Loading';
import Loader from './../../../Ui/Loader';

const Categories = () => {
  // const { data: categories = [] } = useQuery({
  //   queryKey: ["categories"],
  //   queryFn: () =>
  //     fetch(" https://oto-deals-resale-server-jsarafath.vercel.app/categories").then((res) =>
  //       res.json()
  //     ),
  // });
  const {data,isLoading,isError} =useProductGetQuery();
  console.log(data)
  
  let content = null;

    if(isLoading && !isError){
        content = <div><Loader></Loader></div>
    }
    if(!isLoading && isError){
        content = <p>An error occured</p>
    }
    if(!isLoading && !isError && data.length ===0){
        content = <p>No Data Found</p>
    }
    if(!isLoading && !isError && data.length>0){
      content = 
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6  w-[80%] gap-5 mx-auto items-center justify-center gap-y-10 lg:gap-y-0 pb-5">
        {data.slice(0,6).map((category) => (
          <CategoryCard
            key={category.category_id}
            category={category}
          ></CategoryCard>
        ))}
      </div>
  }
    


  return (
    <div className=" mt-9 pt-9">
      <h1 className="text-4xl mt-4 mb-5 font-bold text-gray-800 text-center">
        Browse By Category
      </h1>
      {content}
      
      <div className="flex justify-center">
        <Link 
        className="px-3 py-2 rounded-xl bg-sky-500 font-bold text-white"
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




