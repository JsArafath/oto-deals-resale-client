import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const ViewModal = ({ bookProduct, setBookProduct }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const { name, resalePrice, id, img , description , originalPrice , location ,purchaseYear} = bookProduct;
  console.log(bookProduct);
  const handleModal = (event) => {
    event.preventDefault();
    const form = event.target;
    const Username = form.Username.value;
    const email = form.email.value;
    const name = form.name.value;
    const resalePrice = form.resalePrice.value;
    const Phone = form.Phone.value;
    const meetingLocation = form.MeetingLocation.value;
    const modalInfo = {
      id: id,

      userName: Username,
      email: email,
      name: name,
      resalePrice: resalePrice,
      Phone: Phone,
      meetingLocation: meetingLocation,
      img: img,
    };

    console.log(modalInfo);
    fetch(" https://oto-deals-resale-server-jsarafath.vercel.app/bookeditems", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(modalInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Successfully Booked");
          navigate("/dashboard/myorders");
        }
        console.log(data);
      });

    setBookProduct(null);
  };

  return (
    <div className=" ">
    <input type="checkbox" id="view-modal" className="modal-toggle" />
    <div className="modal">
      <div className="modal-box relative bg-gray-100">
        <label
          htmlFor="view-modal"
          className="btn btn-sm btn-circle absolute right-2 top-2 "
        >
          ✕
        </label>
        <div className="grid lg:grid-cols-2">


        <div className="">
        <img src={img} className="  mt-[] w-[450px] h-[260px] rounded-md" alt=""></img>
        </div>
        <div className="justify-center">
            <p><span className="font-semibold">Product Name:</span> {name}</p>
            <p><span className="font-semibold">Resale Price:</span> {resalePrice}</p>
            <p><span className="font-semibold">Original Price:</span> {originalPrice}</p>
            <p><span className="font-semibold">Location:</span> {location}</p>
            <p><span className="font-semibold">Purchase Year:</span> {purchaseYear}</p>
            <p><span className="font-semibold">Description:</span> {description}</p>
            <p>{}</p>
        </div>
      </div>
    </div>
    </div>
  </div>
  );
};

export default ViewModal;
