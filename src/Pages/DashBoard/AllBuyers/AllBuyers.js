import React from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
const AllBuyers = () => {
  const { data: allbuyers = [], refetch } = useQuery({
    queryKey: ["allbuyers"],
    queryFn: async () => {
      const res = await fetch(
        " https://server-mobilebazar.vercel.app/users/allbuyers"
      );
      const data = await res.json();
      return data;
    },
  });
  const handleDeleteBuyer = (id) => {
    console.log(id);
    fetch(` https://server-mobilebazar.vercel.app/buyer/${id}`, {
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
  return (
    <div className="p-10">
      <h1 className="text-xl font-semibold mb-5">All buyers</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              {/* <th>Image</th> */}
              <th>Buyer Name</th>
              <th>Email</th>
              <th>Action</th>
              {/* <th>Payment Status</th> */}
            </tr>
          </thead>
          <tbody>
            {allbuyers.map((allbuyer, i) => (
              <>
                <tr key={allbuyer._id}>
                  <th>{i + 1}</th>

                  <td>{allbuyer.name}</td>
                  <td>{allbuyer.email}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteBuyer(allbuyer._id)}
                      className="btn btn-primary btn-xs"
                      type="submit"
                    >
                      Delete
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

export default AllBuyers;
