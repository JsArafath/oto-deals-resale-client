import React from "react";

const AdvertisedCard = ({ product }) => {
  const {
    img,
    location,
    name,
    originalPrice,
    resalePrice,
    sellerName,
    usedYear,
  } = product;
  return (
    <div className="place">
      <div className="card p-10 bg-white text-black shadow-xl">
        <figure>
          <img style={{ height: "250px" }} src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-blue-800">{name}</h2>
          <p className="text-black">
            <span className="font-semibold text-black">Location:</span>{" "}
            {location}
          </p>
          <p>
            <span className="font-semibold">Resale Price</span> : Tk{" "}
            {resalePrice}
          </p>
          <p>
            <span className="font-semibold">Original Price</span> : Tk{" "}
            {originalPrice}
          </p>
          <p>
            <span className="font-semibold">Used</span> : {usedYear}{" "}
          </p>
          <p className="text-xl font-semibold">Seller Name : {sellerName}</p>
        </div>
      </div>
      <div className="card bg-base-100 place w-66 shadow-xl">
        <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvertisedCard;


