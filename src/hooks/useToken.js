import { useEffect, useState } from "react";

const useToken = (email) => {
  const [token, setToken] = useState("");

  useEffect(() => {
    if (email) {
<<<<<<< HEAD
      fetch(` https://oto-deals-resale-server-jsarafath.vercel.app/JWT?email=${email}`)
=======
      fetch(` https://oto-resale-server-main.vercel.app/JWT?email=${email}`)
>>>>>>> cf8fad9 (first commit)
        .then((res) => res.json())
        .then((data) => {
          if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            setToken(data.accessToken);
          }
        });
    }
  }, [email]);
  return [token];
};
export default useToken;
