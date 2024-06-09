import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Main";
import Rates from "./components/Rates/Rates";
import Booking from "./pages/Booking";
import Schedule from "./components/Schedule/Schedule";
import Checkout from "./booking/Complete/Complete";
import Exit from "./components/Checkout/Exit";
import ThankYou from "./booking/Checkout/ThankYou";
import Confirmation from "./components/Checkout/Confirmation";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/" element={<Schedule />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/exit" element={<Exit />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<Booking />} />
        <Route path="/rates" element={<Rates />} />
      </Routes>
    </Router>
  );
};

export default App;
