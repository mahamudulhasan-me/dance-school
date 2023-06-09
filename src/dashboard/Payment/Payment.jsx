import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import useSelectedClass from "../../hooks/useSelectedClass";
import SectionHead from "../../pages/Shared/SectionHead/SectionHead";
import CheckoutForm from "./CheckoutForm";

const ELEMENTS_OPTIONS = {
  fonts: [
    {
      cssSrc: "https://fonts.googleapis.com/css?family=Roboto",
    },
  ],
};

// TODO: this keys need to transfer on .env file

const stripePromise = loadStripe(
  "pk_test_51NEWqJBqXwzigbXRP470KDyMHym9vZ2BX4IWTtW2rKgVi70RgduKN7VyUy5ThSS77Om0vAd212ETrKNoNcl5ndw900IHFiKIg3"
);
const Payment = () => {
  const [selectedClasses, refetch, isLoading] = useSelectedClass();

  const price = selectedClasses.reduce((pre, cur) => pre + cur.price, 0);
  const totalPrice = parseFloat(price.toFixed(2));
  return (
    <div>
      <SectionHead
        title={
          <span className="font-semibold">
            Payment & <span className="text-rose-600">Enjoy!</span>{" "}
          </span>
        }
      />
      <div className="AppWrapper">
        <Elements stripe={stripePromise} options={ELEMENTS_OPTIONS}>
          <CheckoutForm price={totalPrice} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
