import React from "react";
import { useQuery } from "@tanstack/react-query";
import AdvertisedCard from "./AdvertisedCard";
const AdvertisedProducts = () => {
  const { data: advertisedItems = [] } = useQuery({
    queryKey: ["advertised"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/advertised"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      {advertisedItems && (
        <>
          <h1 className="text-4xl text-right container font-semibold text-gray-600">
            Advertised
          </h1>
          <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-3 ml-8 mr-8 mt-4 mb-10">
            {advertisedItems.map((product) => (
              <AdvertisedCard
                key={product._id}
                product={product}
              ></AdvertisedCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AdvertisedProducts;
