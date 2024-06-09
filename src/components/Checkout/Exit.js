import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./exit.css";

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const session = location.state?.session;

  if (!session) {
    return <div>No session selected</div>;
  }

  const { time, instructor, level, style, age, price } = session;

  const handlePayment = () => {
    navigate("/confirmation");
  };

  return (
    <div className="checkout-container mt-5">
      <h1 className="text-center">CHECKOUT</h1>
      <p className="text-center">Review your order and complete the payment</p>
      <div className="cart">
        <h3>MY CART</h3>
        <div className="cart-item">
          <p>
            <strong>{`${level} Dance Class (${new Date().toDateString()})`}</strong>
            <br />
            {`Instructor - ${instructor}`}
            <br />
            {`Style - ${style}`}
            <br />
            {`Age Group - ${age}`}
            <br />
            {`Time - ${time}`}
            <br />
            <span>{`Price - $${price}`}</span>
          </p>
        </div>
        <hr />
        <div className="order-summary">
          <h3>ORDER SUMMARY</h3>
          <p>Subtotal - {`$${price.toFixed(2)}`}</p>
          <p>+ Tax 13% - {`$${(price * 0.13).toFixed(2)}`}</p>
          <h4>TOTAL - {`$${(price * 1.13).toFixed(2)}`}</h4>
        </div>
      </div>
      <div className="btn-pop text-center mt-4">
        <button className="btn btn-secondary mr-2" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="btn btn-primary" onClick={handlePayment}>
          CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Checkout;
