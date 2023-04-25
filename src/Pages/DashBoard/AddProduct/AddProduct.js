import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const AddProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { user } = useContext(AuthContext);
  console.log(user.email)

  const navigate = useNavigate();
  const { data: brandnames = [] } = useQuery({
    queryKey: ["productbrandname"],
    queryFn: async () => {
      const res = await fetch(
        " http://localhost:5000/productbrandname"
      );
      const data = await res.json();
      return data;
    },
  });
  const handleProductData = (data) => {
    const dataInfo = {
      name: data.name,
      email: user?.email,
      id: data.id,
      resalePrice: data.resalePrice,
      originalPrice: data.originalPrice,
      condition: data.condition,
      phone: data.phone,
      location: data.location,
      img: data.img,
      usedYear: data.purchaseYear,
      description: data.description,
      sellerName: user?.displayName,
    };
    console.log(dataInfo);
    fetch(" http://localhost:5000/addedproducts", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(dataInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Successfully added");
          navigate("/dashboard/myproduct");
        }
      });
  };

  return (
    <div>
      <h1 className="text-xl font-semibold text-green-900">Add A Product</h1>
      <form
        onSubmit={handleSubmit(handleProductData)}
        className="px-40 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2 p-3 bg-orange-100"
      >
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Name</span>
          </label>
          <select
            {...register("id")}
            className="select select-bordered w-full max-w-xs defa"
          >
            <option disabled>Select Brand Name</option>
            {brandnames.map((brandname) => (
              <option value={brandname._id} key={brandname._id}>
                {brandname.name}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Product Name</span>
          </label>
          <input
            {...register("name")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Resale Price</span>
          </label>
          <input
            {...register("resalePrice")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Original Price</span>
          </label>
          <input
            {...register("originalPrice")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Condition</span>
          </label>
          <select
            {...register("condition")}
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled>Select Condition</option>
            <option>Excellent</option>
            <option>Fair</option>
            <option>Good</option>
          </select>
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Mobile Number</span>
          </label>
          <input
            {...register("phone")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Location</span>
          </label>
          <input
            {...register("location")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Year of Purchase</span>
          </label>
          <input
            {...register("purchaseYear")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Image</span>
          </label>
          <input
            {...register("img")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-xl">Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea  md:w-[320px] lg:w-[320px] textarea-bordered"
            placeholder="Bio"
          ></textarea>
        </div>
        <button
          className="btn lg:btn-wide btn-primary  lg:ml-52 mt-4"
          type="submit"
        >
          Add A Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
