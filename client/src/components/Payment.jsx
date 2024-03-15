// Payment.jsx
import React, { useState, useEffect } from "react";
import { loadScript } from "./utils";

const Payment = ({ amount }) => {
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const loadRazorpayScript = async () => {
      try {
        await loadScript("https://checkout.razorpay.com/v1/checkout.js");
        setScriptLoaded(true);
      } catch (error) {
        console.error("Error loading Razorpay script:", error);
      }
    };

    loadRazorpayScript();
  }, []);

  const handlePayment = async () => {
    if (!scriptLoaded) {
      console.error("Razorpay script not loaded yet.");
      return;
    }

    const options = {
      key: "rzp_test_qSD1GvgtKNe6gE",
      amount: amount * 100, // Amount in paise
      currency: "INR",
      name: "Coderski Dukaan",
      description: "Payment for your order",
      image: "https://example.com/your_logo.png", // Optional
      handler: function (response) {
        console.log("Payment success:", response);
      },
      prefill: {
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div>
      <h2>Payment</h2>
      <p>Total Amount: {amount}</p>
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};

export default Payment;
