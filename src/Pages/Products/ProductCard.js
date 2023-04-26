import { useContext } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
// import { Link } from 'react-router-dom';
import { AuthContext } from './../../context/AuthProvider/AuthProvider';


const ProductCard = ({ product, setBookProduct }) => {
  // const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);
  const {
    img,
    location,
    name,
    originalPrice,
    resalePrice,
    Username,
    purchaseYear,
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
        <div className="  gap-4 bg-white">
         
            <div
              // key={index}
              className="border rounded-lg bg-gray-100"
            >
              <div className="block rounded-lg shadow-lg">
                <PhotoProvider>
                  <div className="p-4">
                    {/* <PhotoView key={index} src={img}> */}
                      <img
                        alt="Home"
                        src={img}
                        className="w-56 mx-auto rounded-md object-cover"
                      />
                    {/* </PhotoView> */}
                  </div>
                </PhotoProvider>

                <div className="mt-2 p-4">
                  <dl>
                    <div>
                      <dd className="font-bold text-sky-700 text-xl">{name}</dd>
                    </div>
                  </dl>
                  <dl>
                    <div>
                      <dd className="text-sm mt-2"><span className="font-semibold text-sm">Seller Name: </span>{user?.displayName}</dd>
                    </div>
                  </dl>
                  <dl>
                    <div>
                      <dd className="text-sm mt-2"><span className="font-semibold text-sm">Location: </span>{location}</dd>
                    </div>
                  </dl>
                  <dl>
                    <div>
                      <dd className="text-sm mt-2"><span className="font-semibold text-sm">Resale Price: </span> ৳{resalePrice}</dd>
                    </div>
                  </dl>
                  <dl>
                    <div>
                      <dd className="text-sm mt-2"><span className="font-semibold text-sm">Orginal Price: </span>  ৳{originalPrice}</dd>
                    </div>
                  </dl>
                  <dl>
                    <div>
                      <dd className="text-sm mt-2"><span className="font-semibold text-sm">Used: </span>{purchaseYear}</dd>
                    </div>
                  </dl>  
                  {/* <dl>
                    <div>
                      <dd className="">{product.discription.slice(0, 100)}</dd>
                    </div>
                  </dl> */}

                  <div className="card-actions justify-end">
                      <label
                        onClick={() => setBookProduct(product)}
                        htmlFor="booking-modal"
                        className="px-3 py-2  rounded-md bg-sky-600 font-bold text-white">
                          Book Now
                      </label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default ProductCard;
