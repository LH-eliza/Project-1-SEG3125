import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Level from "../booking/Level/Level";
import StyleStage from "../booking/Style/Style";
import InstructorStage from "../booking/Instructor/Instructor";
import RegisterStage from "../booking/Register/Register";
import CheckoutStage from "../booking/Complete/Complete";
import ThankYou from "../booking/Checkout/ThankYou";

function Booking() {
  const location = useLocation();
  const [currentStage, setCurrentStage] = useState(0);
  const [formData, setFormData] = useState({
    level: "",
    styles: [],
    instructor: "",
    type: "",
    ageGroup: "",
    date: "",
    dancers: "",
    email: "",
    dancerNames: [],
    time: "",
  });

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    if (location.state && location.state.directToCheckout) {
      const session = location.state.session;
      const newFormData = {
        level: session.level,
        styles: [session.style],
        instructor: session.instructor,
        ageGroup: session.age,
        date: session.date.toDateString(), // Ensure date is in string format
        time: session.time,
        price: session.price,
        dancers: "",
        email: "",
        dancerNames: [],
      };
      setFormData(newFormData);
      addClassToCart(newFormData);
      setCurrentStage(4); // Move to Checkout stage
    }
  }, [location.state]);

  const nextStage = () => setCurrentStage(currentStage + 1);
  const prevStage = () => setCurrentStage(currentStage - 1);
  const goToStage = (stage) => {
    if (stage <= currentStage) {
      setCurrentStage(stage);
    }
  };

  const updateFormData = (data) => {
    setFormData({ ...formData, ...data });
  };

  const addClassToCart = (classData = formData) => {
    setCartItems([...cartItems, { ...classData }]);
    setFormData({
      level: "",
      styles: [],
      instructor: "",
      type: "",
      ageGroup: "",
      date: "",
      dancers: "",
      email: "",
      dancerNames: [],
      time: "",
    });
    setCurrentStage(0); // Reset to the first stage after adding to cart
  };

  const stages = [
    <Level
      nextStage={nextStage}
      updateFormData={updateFormData}
      currentStage={currentStage}
      goToStage={goToStage}
    />,
    <StyleStage
      nextStage={nextStage}
      prevStage={prevStage}
      updateFormData={updateFormData}
      currentStage={currentStage}
      goToStage={goToStage}
    />,
    <InstructorStage
      nextStage={nextStage}
      prevStage={prevStage}
      updateFormData={updateFormData}
      selectedStyles={formData.styles}
      selectedLevel={formData.level}
      currentStage={currentStage}
      goToStage={goToStage}
    />,
    <RegisterStage
      formData={formData}
      prevStage={prevStage}
      nextStage={nextStage}
      updateFormData={updateFormData}
      currentStage={currentStage}
      goToStage={goToStage}
      addClassToCart={addClassToCart}
    />,
    <CheckoutStage
      formData={formData}
      prevStage={prevStage}
      currentStage={currentStage}
      goToStage={goToStage}
      cartItems={cartItems}
      nextStage={nextStage}
    />,
    <ThankYou goToStage={() => goToStage(0)} />,
  ];

  return (
    <div>
      <Navbar />
      {stages[currentStage]}
      <Footer />
    </div>
  );
}

export default Booking;
