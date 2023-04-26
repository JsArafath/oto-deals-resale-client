// import React, { useState } from "react";
import { Link } from "react-router-dom";
import './CategoryCard.css'
// import BookNowModal from "../../BookNowModal/BookNowModal";


const CategoryCard = ({ category }) => {
  const { _id, name } = category;
  console.log(category);
  const handleCard = () => {
    console.log(_id);
  };
  return (
    <div>
      <Link to={`products/${_id}`}>
        <div onClick={handleCard} className="card photoo  rounded-xl shadow-md">
          <div className="card-body gap-5">
            <div className="card-actions "></div>
            <h1 className=" text-center text-gray-800 text-3xl font-bold">
              {name}
            </h1>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryCard;
