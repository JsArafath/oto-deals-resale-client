import { useEffect, useState } from "react";

const useBuyer = (email) => {
  const [isBuyer, setIsBuyer] = useState(false);
  const [isBuyerLoading, setIsBuyerLoading] = useState(true);
  useEffect(() => {
    if (email) {
<<<<<<< HEAD
      fetch(` https://oto-deals-resale-server-jsarafath.vercel.app/users/buyers/${email}`)
=======
      fetch(` https://oto-resale-server-main.vercel.app/users/buyers/${email}`)
>>>>>>> cf8fad9 (first commit)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsBuyer(data.isBuyer);
          setIsBuyerLoading(false);
        });
    }
  }, [email]);
  return [isBuyer, isBuyerLoading];
};
export default useBuyer;
