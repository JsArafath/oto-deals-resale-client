import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const CheckoutForm = ({ bookedData }) => {
  const { resalePrice, userName, email, _id } = bookedData;
  //   console.log(_id);
  const [cardError, setCardError] = useState("");
  const [paymentSuccess, setPaymentSuccess] = useState("");
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch(" https://oto-deals-resale-server-jsarafath.vercel.app/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ resalePrice }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [resalePrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log(error);
      setCardError(error.message);
    } else {
      setCardError("");
    }
    setPaymentProcessing(true);
    setPaymentSuccess("");
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            name: userName,
            email: email,
          },
        },
      });

    if (confirmError) {
      setCardError(confirmError.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
      setPaymentProcessing(false);

      const paymentInfo = {
        resalePrice,
        transactionId: paymentIntent.id,
        email,
        bookingId: _id,
      };
      fetch(" https://oto-deals-resale-server-jsarafath.vercel.app/payments", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(paymentInfo),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            setPaymentSuccess("Your payment is completed");
            setTransactionId(paymentIntent.id);
            toast.success("Payment Successful");
          }
          console.log(data);
        });
    }
    console.log(paymentIntent);
  };
  return (
    <>
      {" "}
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#24b6ff",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="btn btn-info btn-sm mt-2"
          type="submit"
          disabled={!stripe || !clientSecret || paymentProcessing}
        >
          Pay
        </button>
        <p className="text-red-400">{cardError}</p>
        {paymentSuccess && (
          <div>
            <p className="text-blue-700 font-bold">{paymentSuccess}</p>
            <p className="text-blue-700">
              Your transaction Id:{" "}
              <span className="font-bold">{transactionId}</span>
            </p>
          </div>
        )}
      </form>
    </>
  );
};

export default CheckoutForm;