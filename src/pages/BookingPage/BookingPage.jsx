import React from "react";
import BookingForm from "../../features/BookingForm/BookingForm";
import "./BookingPage.css";

function BookingPage() {
  return (
    <main className="booking-container">
      <h2>Book your table!</h2>
      <BookingForm />
    </main>
  );
}

export default BookingPage;
