
import React, { useState, useEffect } from "react";
import "./pages.css";

export default function Contact() {
  const [timeLeft, setTimeLeft] = useState(60);
  const [booked, setBooked] = useState(false);
  const [showTimer, setShowTimer] = useState(true);
  const [fadeClass, setFadeClass] = useState("fade-in");

  useEffect(() => {
    if (timeLeft > 0 && !booked && showTimer) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !booked) {
      setFadeClass("fade-out");
      setTimeout(() => setShowTimer(false), 500); 
    }
  }, [timeLeft, booked, showTimer]);

  const handleBooking = () => {
    setBooked(true);
  };

  const handleClose = () => {
    setFadeClass("fade-out");
    setTimeout(() => setShowTimer(false), 500);
  };

  return (
    <div className="page-container">
      <h2>Контакти</h2>
      <p>Зв'яжіться з нами для консультації або бронювання:</p>
      <ul>
        <li>Email: info@travelpro.com</li>
        <li>Телефон: +380 50 123 4567</li>
        <li>Адреса: м. Київ, вул. Подорожей, 10</li>
      </ul>

      {showTimer && (
        <div className={`timer-top-right ${fadeClass}`}>
          {!booked ? (
            <h4>Забронюйте тур протягом {timeLeft} секунд!</h4>
          ) : (
            <h4 style={{ color: "lime" }}>Ви забронювали тур</h4>
          )}

          <div className="button-row-bottom">
            <button className="close-btn" onClick={handleClose}>✖</button>
            {!booked && (
              <button onClick={handleBooking}>Забронювати</button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
