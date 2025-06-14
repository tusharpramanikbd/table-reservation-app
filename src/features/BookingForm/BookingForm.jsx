import React, { useEffect, useState } from "react";
import "./BookingForm.css";

function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const [date, setDate] = useState("");
  const [bookingTime, setBookingTime] = useState("");
  const [numOfGuests, setNumOfGuests] = useState("1");
  const [occasion, setOccation] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      date: new Date(date),
      time: bookingTime,
      guests: parseInt(numOfGuests),
      occasion: occasion,
    };

    submitForm(formData);
  };

  useEffect(() => {
    if (availableTimes && availableTimes.length > 0) {
      setBookingTime(availableTimes[0]);
    }
  }, [availableTimes]);

  return (
    <form className="booking-form-container" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        required
        onChange={(e) => {
          setDate(e.target.value);
          updateTimes(new Date(e.target.value));
        }}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        value={bookingTime}
        required
        onChange={(e) => setBookingTime(e.target.value)}
      >
        {availableTimes?.map((val, index) => (
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
        required
        value={numOfGuests}
        onChange={(e) => setNumOfGuests(e.target.value)}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        required
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
