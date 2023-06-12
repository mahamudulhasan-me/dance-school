import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useSelectedClass from "../../hooks/useSelectedClass";
import "./Styles.css";
const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": {
        color: "#fce883",
      },
      "::placeholder": {
        color: "#87bbfd",
      },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};

const CardField = ({ onChange }) => (
  <div className="FormRow">
    <CardElement options={CARD_OPTIONS} onChange={onChange} />
  </div>
);

const Field = ({
  label,
  id,
  type,
  placeholder,
  required,
  autoComplete,
  value,
  onChange,
}) => (
  <div className="FormRow">
    <label htmlFor={id} className="FormRowLabel">
      {label}
    </label>
    <input
      className="FormRowInput"
      id={id}
      type={type}
      placeholder={placeholder}
      required={required}
      autoComplete={autoComplete}
      value={value}
      onChange={onChange}
    />
  </div>
);

const ErrorMessage = ({ children }) => (
  <div className="ErrorMessage " role="alert">
    <svg width="16" height="16" viewBox="0 0 17 17">
      <path
        fill="#E11D48"
        d="M8.5,17 C3.80557963,17 0,13.1944204 0,8.5 C0,3.80557963 3.80557963,0 8.5,0 C13.1944204,0 17,3.80557963 17,8.5 C17,13.1944204 13.1944204,17 8.5,17 Z"
      />
      <path
        fill="#6772e5"
        d="M8.5,7.29791847 L6.12604076,4.92395924 C5.79409512,4.59201359 5.25590488,4.59201359 4.92395924,4.92395924 C4.59201359,5.25590488 4.59201359,5.79409512 4.92395924,6.12604076 L7.29791847,8.5 L4.92395924,10.8739592 C4.59201359,11.2059049 4.59201359,11.7440951 4.92395924,12.0760408 C5.25590488,12.4079864 5.79409512,12.4079864 6.12604076,12.0760408 L8.5,9.70208153 L10.8739592,12.0760408 C11.2059049,12.4079864 11.7440951,12.4079864 12.0760408,12.0760408 C12.4079864,11.7440951 12.4079864,11.2059049 12.0760408,10.8739592 L9.70208153,8.5 L12.0760408,6.12604076 C12.4079864,5.79409512 12.4079864,5.25590488 12.0760408,4.92395924 C11.7440951,4.59201359 11.2059049,4.59201359 10.8739592,4.92395924 L8.5,7.29791847 L8.5,7.29791847 Z"
      />
    </svg>
    <span className="text-rose-600">{children}</span>
  </div>
);
const SubmitButton = ({
  processing,
  error,
  children,
  disabled,
  clientSecret,
}) => (
  <button
    className={`SubmitButton ${error ? "SubmitButton--error" : ""}`}
    type="submit"
    disabled={!clientSecret || processing || disabled}
  >
    {processing ? "Processing..." : children}
  </button>
);
const ResetButton = ({ onClick }) => (
  <button type="button" className="ResetButton" onClick={onClick}>
    <svg width="32px" height="32px" viewBox="0 0 32 32">
      <path
        fill="#FFF"
        d="M15,7.05492878 C10.5000495,7.55237307 7,11.3674463 7,16 C7,20.9705627 11.0294373,25 16,25 C20.9705627,25 25,20.9705627 25,16 C25,15.3627484 24.4834055,14.8461538 23.8461538,14.8461538 C23.2089022,14.8461538 22.6923077,15.3627484 22.6923077,16 C22.6923077,19.6960595 19.6960595,22.6923077 16,22.6923077 C12.3039405,22.6923077 9.30769231,19.6960595 9.30769231,16 C9.30769231,12.3039405 12.3039405,9.30769231 16,9.30769231 L16,12.0841673 C16,12.1800431 16.0275652,12.2738974 16.0794108,12.354546 C16.2287368,12.5868311 16.5380938,12.6540826 16.7703788,12.5047565 L22.3457501,8.92058924 L22.3457501,8.92058924 C22.4060014,8.88185624 22.4572275,8.83063012 22.4959605,8.7703788 C22.6452866,8.53809377 22.5780351,8.22873685 22.3457501,8.07941076 L22.3457501,8.07941076 L16.7703788,4.49524351 C16.6897301,4.44339794 16.5958758,4.41583275 16.5,4.41583275 C16.2238576,4.41583275 16,4.63969037 16,4.91583275 L16,7 L15,7 L15,7.05492878 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z"
      />
    </svg>
  </button>
);

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [cardComplete, setCardComplete] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [billingDetails, setBillingDetails] = useState({
    email: "",
    phone: "",
    name: "",
  });
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState();

  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [selectedClasses, refetch] = useSelectedClass();

  useEffect(() => {
    if (price > 0) {
      axiosSecure.post("/create-payment-intent", { price }).then((result) => {
        setClientSecret(result.data.clientSecret);
      });
    }
  }, [price, axiosSecure]);
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }
    if (error) {
      card.focus();
      return;
    }
    if (cardComplete) {
      setProcessing(true);
    }
    const payload = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: billingDetails,
        },
      });
    if (payload.error) {
      setError(payload.error);
    } else {
      setPaymentMethod(payload.paymentMethod);
    }

    if (confirmError) {
      setError(confirmError.message);
      setPaymentMethod(false);
    }
    setProcessing(false);



    if (paymentIntent.status === "succeeded") {
      setTransactionId(paymentIntent.id);
      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        date: new Date(),
        amount: price,
        classesId: selectedClasses.map((item) => item.classId),
        selectedClassesId: selectedClasses.map((item) => item._id),
        className: selectedClasses.map((item) => item.className),
      };
      axiosSecure.post("/payments/", payment).then((response) => {
        if (response.data.insertedResult.insertedId) {
          toast.success("Payment Success!");
          refetch();
        }
      });
    }
  };

  const reset = () => {
    setError(null);
    setProcessing(false);
    setPaymentMethod(null);
    setBillingDetails({
      email: "",
      phone: "",
      name: "",
    });
  };

  return (
    <div className="checkout_form bg-white h-full">
      {paymentMethod ? (
        <div className="Result pt-10">
          <div className="font-semibold text-success" role="alert">
            Payment successful
          </div>
          <div className="px-5 text-primary">
            Thanks for trying Stripe Elements. No money was charged, but we
            generated a PaymentMethod: {paymentMethod.id}
          </div>
          <ResetButton onClick={reset} />
        </div>
      ) : (
        <form
          className="Form w-3/5 bg-white mx-auto py-10"
          onSubmit={handleSubmit}
        >
          <fieldset className="FormGroup ">
            <Field
              label="Name"
              id="name"
              type="text"
              required
              autoComplete="name"
              value={user?.displayName}
              onChange={(e) => {
                setBillingDetails({ ...billingDetails, name: e.target.value });
              }}
            />
            <Field
              label="Email"
              id="email"
              type="email"
              required
              autoComplete="email"
              value={user.email}
              onChange={(e) => {
                setBillingDetails({ ...billingDetails, email: e.target.value });
              }}
            />
            <Field
              label="Phone"
              id="phone"
              type="tel"
              required
              autoComplete="tel"
              value={user.phone ? user.phone : "n/a"}
              onChange={(e) => {
                setBillingDetails({ ...billingDetails, phone: e.target.value });
              }}
            />
          </fieldset>
          <fieldset className="FormGroup">
            <CardField
              onChange={(e) => {
                setError(e.error);
                setCardComplete(e.complete);
              }}
            />
          </fieldset>
          <span className="text-center">
            {error && <ErrorMessage>{error.message}</ErrorMessage>}
          </span>
          <SubmitButton
            processing={processing}
            clientSecret={clientSecret}
            error={error}
            disabled={!stripe}
          >
            ${price}
          </SubmitButton>
        </form>
      )}
    </div>
  );
};

export default CheckoutForm;
