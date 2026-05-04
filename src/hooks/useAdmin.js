import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);
  useEffect(() => {
    if (email) {
<<<<<<< HEAD
      fetch(` https://oto-deals-resale-server-jsarafath.vercel.app/users/admin/${email}`)
=======
      fetch(` https://oto-resale-server-main.vercel.app/users/admin/${email}`)
>>>>>>> cf8fad9 (first commit)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setIsAdmin(data.isAdmin);
          setIsAdminLoading(false);
        });
    }
  }, [email]);
  return [isAdmin, isAdminLoading];
};
export default useAdmin;
