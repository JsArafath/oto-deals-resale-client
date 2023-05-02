import React from "react";
import { PhotoProvider } from "react-photo-view";
// import { Link } from 'react-router-dom';
// import { AuthContext } from './../../context/AuthProvider/AuthProvider';


const ProductCard = ({ product, setBookProduct }) => {
  // const [loading, setLoading] = useState(true);
  // const { user } = useContext(AuthContext);
  const {
    img,
    location,
    name,
    originalPrice,
    resalePrice,
    purchaseYear,
  } = product;
  console.log(product);
  return (
    
    <div className=" pt-5 pb-20 bg-white  ">
        <div className="  gap-5 bg-white">
         
            <div
              // key={index}
              className="border rounded-lg bg-gray-100 hover:scale-105 ease-in duration-100"
            >
              <div className="block rounded-lg shadow-lg ">
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
                  {/* <dl>
                    <div>
                      <dd className="text-sm mt-2"><span className="font-semibold text-sm">Seller Name: </span>{user?.displayName}</dd>
                    </div>
                  </dl> */}
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

                  <div className="card-actions mt-4">
                      <label
                        onClick={() => setBookProduct(product)}
                        htmlFor="booking-modal"
                        className="px-3 py-2  rounded-md bg-sky-600 mr-4 font-bold text-white">
                          Book Now
                      </label>

                      <label
                        onClick={() => setBookProduct(product)}
                        htmlFor="view-modal"
                        className="px-3 py-2  rounded-md bg-sky-600 font-bold text-white">
                          View Deatails
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
