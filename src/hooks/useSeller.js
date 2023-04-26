import { useEffect, useState } from "react";

const useSeller = (email) => {
  const [isSeller, setSeller] = useState(false);
  const [isSellerLoading, setIsSellerLoading] = useState(true);
  useEffect(() => {
    if (email) {
      fetch(` https://oto-deals-resell-server.onrender.com/users/seller/${email}`)
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
