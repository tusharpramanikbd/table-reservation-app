import React, { useState } from "react";
import "./BookingForm.css";

const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

function BookingForm() {
  const [date, setDate] = useState("");
  const [bookingTime, setBookingTime] = useState(availableTimes[0]);
  const [numOfGuests, setNumOfGuests] = useState("1");
  const [occasion, setOccation] = useState("Birthday");

  return (
    <form className="booking-form-container">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={bookingTime}
        onChange={(e) => setBookingTime(e.target.value)}
      >
        {availableTimes.map((val, index) => (
          <option key={index}>{val}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={numOfGuests}
        onChange={(e) => setNumOfGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccation(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;
