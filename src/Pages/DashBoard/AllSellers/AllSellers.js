import React from "react";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
const AllSellers = () => {
  const { data: allsellers = [], refetch } = useQuery({
    queryKey: ["allsellers"],
    queryFn: async () => {
      const res = await fetch(
        " https://oto-deals-resale-server-jsarafath.vercel.app/users/allsellers"
      );
      const data = await res.json();
      return data;
    },
  });
  const handleSellerDelete = (id) => {
    console.log(id);
    fetch(` https://oto-deals-resale-server-jsarafath.vercel.app/seller/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          toast.success("Deleted Successfully");
        }
        refetch();
      });
  };
  const handleSellerVerify = (id) => {
    console.log(id);
    fetch(` https://oto-deals-resale-server-jsarafath.vercel.app/seller/verify/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("verified successfully");
          refetch();
        }
        console.log(data);
      });
  };
  return (
    <div className="p-10">
      <h1 className="text-xl font-semibold">All Sellers</h1>
      <div className="overflow-x-auto mt-3">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              {/* <th>Image</th> */}
              <th>Seller Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>Action</th>
              <th>Verify</th>
            </tr>
          </thead>
          <tbody>
            {allsellers.map((allseller, i) => (
              <>
                <tr key={allseller._id}>
                  <th>{i + 1}</th>

                  <td>{allseller.name}</td>
                  <td>{allseller.email}</td>
                  {allseller?.type === "verified" ? (
                    <>
                      <td className="text-green-800 font-bold text-md">
                        verified
                      </td>
                    </>
                  ) : (
                    <>
                      <td className="text-md">Unverified</td>
                    </>
                  )}
                  <td>
                    <button
                      onClick={() => handleSellerDelete(allseller._id)}
                      className="btn bg-sky-600 btn-xs"
                      type="submit"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleSellerVerify(allseller._id)}
                      className="btn bg-sky-600 btn-xs"
                      type="submit"
                    >
                      Verify
                    </button>
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

export default AllSellers;
