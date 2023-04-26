import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const BookNowModal = ({ bookProduct, setBookProduct }) => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  const { name, resalePrice, id, img } = bookProduct;
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
    fetch(" http://localhost:5000/bookeditems", {
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
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleModal}
            className="grid grid-cols-1 gap-3 text-black p-5"
          >
            <input
              type="text"
              value={user?.displayName}
              name="Username"
              placeholder="User Name"
              className="input w-full bg-white "
            />
            <input
              type="email"
              value={user?.email}
              name="email"
              placeholder="Email"
              className="input w-full bg-white "
            />
            <input
              type="text"
              name="name"
              value={name}
              disabled
              placeholder="Item Name"
              className="input w-full bg-blue-100"
            />
            <input
              type="text"
              name="resalePrice"
              value={resalePrice}
              disabled
              placeholder="Price"
              className="input w-full bg-white"
            />
            <input
              type="text"
              name="Phone"
              placeholder="Phone"
              className="input w-full bg-white"
            />
            <input
              type="text"
              name="MeetingLocation"
              placeholder="Meeting Location"
              className="input w-full bg-white"
            />
            <input className="btn btn-primary" type="submit" value="Submit" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookNowModal;
