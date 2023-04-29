import React from "react";
import loader from "../../src/assets/loading.gif"

const Loader = () => {
  return (
    <div>
      <div className="w-32 h-32 mx-auto "> <img src={loader} alt='' /></div>
    </div>
  );
};

export default Loader;

