// import React from "react";
// import { Link } from "react-router-dom";
// import Typewriter from "typewriter-effect";
// import './Banner.css'


// const Banner = () => {
//   return (
//     <div>
//       <div className="hero min-h-screen bg-gray-100">
//         <div className="hero-content flex-col lg:flex-row-reverse"> 
//           <img
//             src="https://i.ibb.co/zSMqssq/Untitled-2-removebg-preview.png"
//             className=" rounded-lg"
//             alt=""
//           />
//           <div className="p-14">
//             <h1 className="text-6xl text-gray-700 font-bold pb-4">
//               Lowest Price!
//             </h1>
//             <h1 className="font-bold text-2xl text-gray-600 pb-2">
//               <Typewriter
//                 options={{
//                   strings: ["EVERYTHING"],
//                   autoStart: true,
//                   loop: true,
//                 }}
//               />
//             </h1>
//             <p className=" pb-4 text-gray-600">
//               High Quality - Extreme Performance
//             </p>
//             <div className="mt-2">
//                 <Link to="/login">
//                   <button className="px-4 py-2 text-white hover:bg-blue-600 bg-sky-600 rounded">
//                     Sell Now
//                   </button>
//                 </Link>
//                 {/* <Link to="/products">
//                   {" "}
//                   <button className="px-4 py-2 hover:bg-blue-600 rounded ml-2 border border-white">
//                     See All Phone
//                   </button>
//                 </Link> */}
//               </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
//  export default Banner;








import { Link } from "react-router-dom";
// import "swiper/css";
// import { Swiper, SwiperSlide } from "swiper/react";
import Typewriter from "typewriter-effect";
import img2 from "../../../assets/samsung-galaxy-q2-5g-black-spin-thumb.jpeg";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      {/* <Swiper spaceBetween={10} slidesPerView={1}> */}
        
          <div className="absolute bg-gray-900 opacity-50 w-full h-full "></div>
          <div className="absolute w-full h-full  flex flex-col justify-center ">
            <section className="text-white py-20 p-5 md:p-20">
              <h1 className=" text-5xl md:text-5xl font-extrabold mb-2">
                Lowest Price!
              </h1>
              <p className="md:text-sm text-sm font-bold">
              <Typewriter
                options={{
                  strings: ["EVERYTHING"],
                  autoStart: true,
                  loop: true,
                }}
              />
              </p>
              <p className="md:text-lg text-lg">
              High Quality - Extreme Performance
              </p>
              <div className="mt-2">
                <Link to="/login">
                  <button className="px-4 py-2 hover:bg-blue-900 bg-blue-600 rounded">
                    Sell Now
                  </button>
                </Link>
              </div>
            </section>
          </div>

          <img src={img2} className="w-full " alt="00" />
     
      
    </div>
  );
};

export default Banner;