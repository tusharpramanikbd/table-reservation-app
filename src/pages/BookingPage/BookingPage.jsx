import React, { useEffect, useReducer } from "react";
import BookingForm from "../../features/BookingForm/BookingForm";
import "./BookingPage.css";
import { fetchAPI, submitAPI } from "../../mockApi";

const initialState = [];

function BookingPage() {
  const updateTimes = (state, action) => {
    const dates = fetchData(action);
    return dates;
  };

  const fetchData = (date) => {
    try {
      const result = fetchAPI(date);
      return result;
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

  useEffect(() => {
    const initializeTimes = () => {
      try {
        const today = new Date();
        dispatch(today);
      } catch (err) {
        console.error("Error Initializing data:", err);
      }
    };

    initializeTimes();
  }, []);

  const submitForm = (formData) => {
    try {
      const result = submitAPI(formData);

      if (result) {
        alert("Booking is successfully completed");
      } else {
        alert("Booking is failed");
      }
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  return (
    <main className="booking-container">
      <h2>Book your table!</h2>
      <BookingForm
        availableTimes={availableTimes}
        updateTimes={dispatch}
        submitForm={submitForm}
      />
    </main>
  );
}

export default BookingPage;
