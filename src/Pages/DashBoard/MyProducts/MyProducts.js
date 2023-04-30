import React, { useContext } from "react";
// import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: myProducts = [], refetch } = useQuery({
    queryKey: ["addedproducts"],
    queryFn: async () => {
      const res = await fetch(
        ` https://oto-deals-resale-server-jsarafath.vercel.app/addedproducts?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  const handleDeleteBySeller = (id) => {
    console.log(id);
    fetch(` https://oto-deals-resale-server-jsarafath.vercel.app/postedproduct/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          toast.success("Deleted Successfully");
          refetch();
        }
      });
  };

  const handleAdvertiseItem = (myProduct) => {
    console.log(myProduct.id);
    const advertisedItemData = {
      name: myProduct.name,
      id: myProduct.id,
      img: myProduct.img,
      location: myProduct.location,
      resalePrice: myProduct.resalePrice,
      originalPrice: myProduct.originalPrice,
      usedYear: myProduct.usedYear,
      sellerName: myProduct.sellerName,
    };
    console.log(advertisedItemData);
    fetch(" https://oto-deals-resale-server-jsarafath.vercel.app/advertisedproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(advertisedItemData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Successfully Advertised");
        }
      });
  };
  return (
    <div>
      <h1 className="text-xl font-semibold text-green-900">My products</h1>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Action</th>
              <th>Advertise Item</th>
              {/* <th>Payment Status</th> */}
            </tr>
          </thead>
          <tbody>
            {myProducts.map((myProduct, i) => (
              <>
                <tr key={myProduct._id}>
                  <th>{i + 1}</th>
                  <td>
                    <img
                      style={{ height: "80px", width: "100px" }}
                      src={myProduct.img}
                      alt=""
                    />
                  </td>
                  <td>{myProduct.name}</td>
                  <td>{myProduct.price}</td>
                  <td>
                    <button
                      onClick={() => handleDeleteBySeller(myProduct._id)}
                      className="btn btn-primary btn-xs"
                      type="submit"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleAdvertiseItem(myProduct)}
                      className="btn btn-primary btn-xs"
                      type="submit"
                    >
                      Advertise
                    </button>
                  </td>
                  {/* <td>
                    <Link className="btn btn-primary btn-sm">Pay</Link>
                  </td> */}
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;
