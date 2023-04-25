import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useProductPostMutation } from "../../../features/product/productApi";
import { toast } from "react-hot-toast";

const AddProduct = () => {
  const [postProduct, {isLoading, isError}] = useProductPostMutation();
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
postProduct(data);
if(data){
  toast('Added Product Successfully')
}
  }
    if(isLoading){
      <p>Loading</p>
    }
    if(isError){
      <p>Error</p>
    }

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
