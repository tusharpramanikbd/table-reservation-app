import React, { useReducer } from "react";
import BookingForm from "../../features/BookingForm/BookingForm";
import "./BookingPage.css";

const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

const updateTimes = (state, action) => {
  console.log("State", state);
  console.log("Action", action);
  return state;
};

function BookingPage() {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes);
  return (
    <main className="booking-container">
      <h2>Book your table!</h2>
      <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
    </main>
  );
}

export default BookingPage;
