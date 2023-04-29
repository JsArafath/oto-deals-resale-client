import React from "react";
import loader from "../../assets/loading.gif"
import loaders from "../../assets/giphy.gif"

const Loading = () => {
  return (
    <div>
      <div className="w-56 h-56 mx-auto "> <img src={loader} alt='' /></div>
      <div className="w-44 h-44 mx-auto mt-[-80px] mb-[100px]"> <img src={loaders} alt='' /></div>
    </div>
  );
};

export default Loading;

