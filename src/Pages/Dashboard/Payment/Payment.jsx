import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheakoutForm from "./CheakoutForm";

// TODO: add publisheable key
const stripePromise = loadStripe(import.meta.env.VITE_Payment_PK_Key);

const Payment = () => {
  return (
    <div>
      <SectionTitle
        heading={"pay before eat"}
        subHeading={"pay all of foods"}
      ></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheakoutForm></CheakoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
