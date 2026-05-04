import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  useEffect(() => {
    if (email) {
<<<<<<< HEAD
      fetch(` https://oto-deals-resale-server-jsarafath.vercel.app/users/seller/${email}`)
=======
      fetch(` https://oto-resale-server-main.vercel.app/users/seller/${email}`)
>>>>>>> cf8fad9 (first commit)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setSeller(data.isSeller);
          setIsSellerLoading(false);
        });
    }
  }, [email]);
  return [isSeller, isSellerLoading];
};
export default useSeller;
