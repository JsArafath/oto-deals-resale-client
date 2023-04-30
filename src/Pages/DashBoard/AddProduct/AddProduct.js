import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
// import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import { useProductPostMutation } from "../../../features/product/productApi";
import { toast } from "react-hot-toast";
import './AddProduct.css'

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
        " https://oto-deals-resale-server-jsarafath.vercel.app/productbrandname"
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
    <div className="p-5">
      <h1 className="text-2xl pb-2 font-bold text-gray-700">Add A Product</h1>
      <form
        onSubmit={handleSubmit(handleProductData)}
        className=" grid grid-cols-1 addpro gap-3 md:grid-cols-2 font-semibold lg:grid-cols-2 p-9 rounded-lg"
      >
        <div className="form-control ">
          <label>
            <span className="label-text text-lg">Name</span>
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
            <span className="label-text text-lg">Product Name</span>
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
            <span className="label-text text-lg">Resale Price</span>
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
            <span className="label-text text-lg">Original Price</span>
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
            <span className="label-text text-lg">Condition</span>
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
            <span className="label-text text-lg">Mobile Number</span>
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
            <span className="label-text text-lg">Location</span>
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
            <span className="label-text text-lg">Year of Purchase</span>
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
            <span className="label-text text-lg">Image</span>
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
            <span className="label-text text-lg">Description</span>
          </label>
          <textarea
            {...register("description")}
            className="textarea  md:w-[320px] lg:w-[320px] textarea-bordered"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="form-control">
          <label>
            <span className="label-text text-lg">Seller Name</span>
          </label>
          <input
            {...register("seller")}
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
        <button
          className="btn lg:btn-wide bg-sky-500 rounded  lg:ml-52 mt-4"
          type="submit"
        >
          Add A Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
