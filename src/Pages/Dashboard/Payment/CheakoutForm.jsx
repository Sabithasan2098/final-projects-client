import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSequere from "../../../Components/hooks/useAxiosSequere";
import useCart from "../../../Components/hooks/useCart";
// import Login from "../../Login/Login";

const CheakoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState();
  const stripe = useStripe();
  const elements = useElements();
  const axiosSequere = useAxiosSequere();
  const [cart] = useCart();
  const totalPrice = cart.reduce((tp, cp) => tp + cp.price, 0);

  useEffect(() => {
    axiosSequere.post("/create-payment-intent", totalPrice).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, [axiosSequere, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("payment error", error);
      setError(error.message);
    } else {
      console.log("payment method", paymentMethod);
      setError("");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement>
        options=
        {{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      </CardElement>
      <button
        className="btn btn-info btn-xs my-4 text-white"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-400">{error}</p>
    </form>
  );
};

export default CheakoutForm;
