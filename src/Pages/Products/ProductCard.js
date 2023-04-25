import { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
// import { Link } from 'react-router-dom';


const ProductCard = ({ product, setBookProduct }) => {
  // const [loading, setLoading] = useState(true);
  const {
    img,
    location,
    name,
    originalPrice,
    resalePrice,
    sellerName,
    usedYear,
  } = product;
  console.log(product);
  return (
    // <div>
    //   <div className="card w-96 p-10 bg-white text-black shadow-xl">
    //     <figure>
    //       <img style={{ height: "250px" }} src={img} alt="Shoes" />
    //     </figure>
    //     <div className="card-body">
    //       <h2 className="card-title text-blue-800">{name}</h2>
    //       <p className="text-black">
    //         <span className="font-semibold text-black">Location:</span>{" "}
    //         {location}
    //       </p>
    //       <p>
    //         <span className="font-semibold">Resale Price</span> : Tk{" "}
    //         {resalePrice}
    //       </p>
    //       <p>
    //         <span className="font-semibold">Original Price</span> : Tk{" "}
    //         {originalPrice}
    //       </p>
    //       <p>
    //         <span className="font-semibold">Used</span> : {usedYear}{" "}
    //       </p>
    //       <p className="text-xl font-semibold">Seller Name : {sellerName}</p>
    //       <div className="card-actions justify-end">
    //         {/* <button className="btn "></button> */}
    //         <label
    //           onClick={() => setBookProduct(product)}
    //           htmlFor="booking-modal"
    //           className="btn btn-primary"
    //         >
    //           Book Now
    //         </label>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className=" pt-5 pb-20 bg-white">
      {/* {loading ? (
        <h1 className="flex text-xl font-bold justify-center items-center h-screen">
          {" "}
          Loading...{" "}
        </h1>
      ) : ( */}
        <div className="  gap-4 bg-white">
          {/* {product.map((product, index) => ( */}
            <div
              // key={index}
              className="border border-gray-400 rounded-lg bg-white"
            >
              <div className="block rounded-lg p-4 ">
                <PhotoProvider>
                  <div className="foo">
                    {/* <PhotoView key={index} src={img}> */}
                      <img
                        alt="Home"
                        src={img}
                        className="w-56 rounded-md object-cover"
                      />
                    {/* </PhotoView> */}
                  </div>
                </PhotoProvider>

                <div className="mt-2">
                  <dl>
                    <div>
                      <dd className="font-bold text-xl">{name}</dd>
                    </div>
                  </dl>
                  <dl>
                    <div>
                      <dd className="font-bold text-xl">{location}</dd>
                    </div>
                  </dl>
                  <dl>
                    <div>
                      <dd className="font-bold text-xl">{resalePrice}</dd>
                    </div>
                  </dl>
                  <dl>
                    <div>
                      <dd className="font-bold text-xl">{originalPrice}</dd>
                    </div>
                  </dl>
                  <dl>
                    <div>
                      <dd className="font-bold text-xl">{usedYear}</dd>
                    </div>
                  </dl>
                  <dl>
                    <div>
                      <dd className="font-bold text-xl">{sellerName}</dd>
                    </div>
                  </dl>
                  {/* <dl>
                    <div>
                      <dd className="">{product.discription.slice(0, 100)}</dd>
                    </div>
                  </dl> */}

                  <div className="card-actions justify-end">
                     <button className="btn "></button>
                      <label
                        onClick={() => setBookProduct(product)}
                        htmlFor="booking-modal"
                        className="btn btn-primary">
                          Book Now
                      </label>
                  </div>
                </div>
              </div>
            </div>
          
        </div>
      {/* )} */}
    </div>
  );
};

export default ProductCard;
