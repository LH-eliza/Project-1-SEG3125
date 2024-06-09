import React from "react";
import ProgressIndicator from "../../components/Progress/Progress";
import "./complete.css";

const CheckoutStage = ({
  formData,
  prevStage,
  currentStage,
  goToStage,
  nextStage,
}) => {
  const { type, ageGroup, date, dancers, level, instructor, styles } = formData;
  const orderNumber = "0001";

  const pricing = {
    Beginner: {
      Private: { price: 100, duration: "30 Minutes" },
      "Semi-Private": { price: 80, duration: "30 Minutes" },
      Open: { price: 49, duration: "30 Minutes" },
    },
    Learner: {
      Private: { price: 120, duration: "45 Minutes" },
      "Semi-Private": { price: 100, duration: "45 Minutes" },
      Open: { price: 59, duration: "45 Minutes" },
    },
    Intermediate: {
      Private: { price: 130, duration: "1 Hour" },
      "Semi-Private": { price: 120, duration: "1 Hour" },
      Open: { price: 79, duration: "1 Hour" },
    },
    Master: {
      Private: { price: 200, duration: "2 Hours" },
      "Semi-Private": { price: 160, duration: "2 Hours" },
      Open: { price: 119, duration: "2 Hours" },
    },
  };

  const calculateSubtotal = () => {
    if (pricing[level] && pricing[level][type]) {
      return pricing[level][type].price * dancers;
    }
    return 0;
  };

  const subtotal = calculateSubtotal();
  const tax = subtotal * 0.13;
  const total = subtotal + tax;

  return (
    <div className="checkout-container mt-5">
      <h1 className="text-center">CHECKOUT</h1>
      <p className="text-center">Review your order and complete the payment</p>
      <ProgressIndicator currentStage={currentStage} goToStage={goToStage} />
      <div className="cart">
        <h3>MY CART</h3>
        <div className="cart-item">
          <p>
            <strong>{`${level} Dance Class (${new Date(
              date
            ).toDateString()})`}</strong>
            <br />
            {`Instructor - ${instructor}`}
            <br />
            {`Style - ${styles}`}
            <br />
            {`Duration - ${pricing[level][type].duration}`}
            <br />
            <span>
              {new Date(date).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </p>
          <p>
            {`C$${pricing[level][type].price.toFixed(2)}`}
            <br />x {dancers}
          </p>
        </div>
        <hr />
        <div className="order-summary">
          <h3>ORDER SUMMARY</h3>
          <p>Subtotal - {`C$${subtotal.toFixed(2)}`}</p>
          <p>+ HST 13% - {`C$${tax.toFixed(2)}`}</p>
          <h4>TOTAL - {`C$${total.toFixed(2)}`}</h4>
        </div>
      </div>
      <div className="btn-pop text-center mt-4">
        <button className="btn btn-secondary mr-2" onClick={prevStage}>
          Back
        </button>
        <button className="btn btn-primary" onClick={nextStage}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default CheckoutStage;
