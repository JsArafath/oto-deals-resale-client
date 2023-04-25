import React from "react";
import { useQuery } from "@tanstack/react-query";
import AdvertisedCard from "./AdvertisedCard";
const AdvertisedProducts = () => {
  const { data: advertisedItems = [] } = useQuery({
    queryKey: ["advertised"],
    queryFn: async () => {
      const res = await fetch(
        " https://server-mobilebazar.vercel.app/advertised"
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      {advertisedItems && (
        <>
          <h1 className="text-4xl text-right container font-semibold text-indigo-400">
            Advertised Items
          </h1>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 ml-8 mt-4 mb-10 p-5">
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
