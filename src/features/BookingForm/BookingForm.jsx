import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./BookingForm.css";

function BookingForm({ availableTimes, updateTimes, submitForm }) {
  const validationSchema = Yup.object({
    date: Yup.date().required("Date is required"),
    bookingTime: Yup.string().required("Booking time is required"),
    numOfGuests: Yup.number()
      .min(1, "Must be at least 1 guest")
      .max(10, "Cannot exceed 10 guests")
      .required("Number of guests is required")
      .typeError("Number of guests must be a number"),
    occasion: Yup.string().required("Occasion is required"),
  });

  const formik = useFormik({
    initialValues: {
      date: new Date().toISOString().split("T")[0],
      bookingTime: availableTimes?.[0] || "",
      numOfGuests: "1",
      occasion: "Birthday",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const formData = {
        date: new Date(values.date),
        time: values.bookingTime,
        guests: parseInt(values.numOfGuests),
        occasion: values.occasion,
      };
      submitForm(formData);
    },
  });

  useEffect(() => {
    if (availableTimes && availableTimes.length > 0) {
      if (
        !availableTimes.includes(formik.values.bookingTime) ||
        !formik.values.bookingTime
      ) {
        formik.setFieldValue("bookingTime", availableTimes[0]);
      }
    } else {
      formik.setFieldValue("bookingTime", "");
    }
  }, [availableTimes, updateTimes, formik]);

  useEffect(() => {
    if (formik.values.date && !formik.errors.date) {
      updateTimes(new Date(formik.values.date));
    }
  }, [formik.errors.date, formik.values.date, updateTimes]);

  return (
    <form className="booking-form-container" onSubmit={formik.handleSubmit}>
      {/* Date Field */}
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        min={new Date().toISOString().split("T")[0]}
        {...formik.getFieldProps("date")}
      />
      {formik.touched.date && formik.errors.date ? (
        <div className="error-message">{formik.errors.date}</div>
      ) : null}

      {/* Time Field */}
      <label htmlFor="bookingTime">Choose time</label>
      <select
        id="bookingTime"
        name="bookingTime"
        {...formik.getFieldProps("bookingTime")}
      >
        {availableTimes?.length > 0 ? (
          availableTimes.map((val, index) => (
            <option key={index} value={val}>
              {val}
            </option>
          ))
        ) : (
          <option disabled value="">
            No times available
          </option>
        )}
      </select>
      {formik.touched.bookingTime && formik.errors.bookingTime ? (
        <div className="error-message">{formik.errors.bookingTime}</div>
      ) : null}

      {/* Number of Guests Field */}
      <label htmlFor="numOfGuests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="numOfGuests"
        name="numOfGuests"
        {...formik.getFieldProps("numOfGuests")}
      />
      {formik.touched.numOfGuests && formik.errors.numOfGuests ? (
        <div className="error-message">{formik.errors.numOfGuests}</div>
      ) : null}

      {/* Occasion Field */}
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        {...formik.getFieldProps("occasion")}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
        <option value="Other">Other</option>
      </select>
      {formik.touched.occasion && formik.errors.occasion ? (
        <div className="error-message">{formik.errors.occasion}</div>
      ) : null}

      <input
        type="submit"
        value="Make Your reservation"
        disabled={!formik.isValid}
        aria-label="Make Your reservation"
      />
    </form>
  );
}

export default BookingForm;
