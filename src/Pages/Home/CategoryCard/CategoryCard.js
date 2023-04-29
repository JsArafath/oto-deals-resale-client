// import React, { useState } from "react";
import { Link } from "react-router-dom";
import './CategoryCard.css'
// import BookNowModal from "../../BookNowModal/BookNowModal";


const CategoryCard = ({ category }) => {
  const { _id, name, img  } = category;
  console.log(category);
  const handleCard = () => {
    console.log(_id);
  };
  return (
    <div className="h-[80%] pb-5 mb-5">
      <Link key={category.category_id} to={`products/${_id}`}>
                        <div onClick={handleCard} className="flex-shrink-0 mx-2 -mb-6 photoo relative overflow-hidden bg-base-300 rounded-lg max-w-xs shadow-lg hover:scale-110 ease-in duration-100">
                            <div className="relative pt-10 px-10 flex items-center justify-center">
                                <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3">
                                </div>
                                <img className="relative w-24" src={img} alt="products" />
                            </div>
                            <div className="relative text-white px-6 pb-6 mt-6">

                                <div className="flex justify-center align-center">
                                    <span className="block text-xs bg-white rounded-full text-purple-500 font-serif px-3 py-2 leading-none">
                                        {name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Link>
    </div>
  );
};

export default CategoryCard;
