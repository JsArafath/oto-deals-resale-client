import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const url = ` https://oto-deals-resell-server.onrender.com/bookeditems?email=${user?.email}`;
  const { data: bookedItems = [] } = useQuery({
    queryKey: ["bookeditems", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });
  console.log(bookedItems);
  return (
    <div>
      <h1 className="text-lg font-semibold">My Orders</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              {/* <th>Image</th> */}
              <th>Product Name</th>
              <th>Price</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {bookedItems?.map((bookedItem, i) => (
              <>
                <tr key={bookedItem._id}>
                  <th>{i + 1}</th>
                  {/* <td>{bookedItem.img}</td> */}
                  <td>{bookedItem.name}</td>
                  <td>{bookedItem.resalePrice}</td>
                  <td>
                    {bookedItem.resalePrice && !bookedItem.paid && (
                      <Link
                        to={`/dashboard/payment/${bookedItem._id}`}
                        className="btn btn-info btn-sm"
                      >
                        Pay
                      </Link>
                    )}
                    {bookedItem.resalePrice && bookedItem.paid && (
                      <span className="text-info font-bold">Paid</span>
                    )}
                  </td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
