import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Main";
import Rates from "./components/Rates/Rates";
import Booking from "./pages/Booking";
import Schedule from "./components/Schedule/Schedule";
import Checkout from "./booking/Complete/Complete";
import ThankYou from "./booking/Checkout/ThankYou";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/" element={<Schedule />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/thank-you" element={<ThankYou />} />
        <Route path="*" element={<Booking />} />
        <Route path="/rates" element={<Rates />} />
      </Routes>
    </Router>
  );
};

export default App;
