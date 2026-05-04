<<<<<<< HEAD
import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import useAdmin from "../../hooks/useAdmin";
import Loading from "../../Pages/Loading/Loading";

const AdminRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const [isAdmin, isAdminLoading] = useAdmin(user?.email);
  const location = useLocation();
  if (loading || isAdminLoading) {
    return <Loading></Loading>;
  }
  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;
=======
import { useEffect, useState } from "react";

const useAdmin = (email) => {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAdminLoading, setIsAdminLoading] = useState(true);

  useEffect(() => {
    if (!email) {
      setIsAdmin(false);
      setIsAdminLoading(false);
      return;
    }

    setIsAdminLoading(true);

    fetch(`https://oto-resale-server-main.vercel.app/users/admin/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setIsAdmin(data?.isAdmin === true);
        setIsAdminLoading(false);
      })
      .catch((err) => {
        console.error("Admin check error:", err);
        setIsAdmin(false);
        setIsAdminLoading(false);
      });
  }, [email]);

  return [isAdmin, isAdminLoading];
};

export default useAdmin;
>>>>>>> cf8fad9 (first commit)
