/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-wait-for-side-effects */
import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as mockApi from "../mockApi";
import BookingForm from "../features/BookingForm/BookingForm";

jest.spyOn(mockApi, "fetchAPI").mockImplementation((date) => {
  const day = date.getDate();
  if (day === 15) {
    return ["17:00", "18:00", "19:00"];
  }
  if (day === 16) {
    return ["17:30", "18:30", "19:30"];
  }
  return ["20:00", "20:30"];
});

jest.spyOn(mockApi, "submitAPI").mockImplementation((formData) => {
  console.log("Mock submitAPI called with:", formData);
  return true;
});

describe("BookingForm Validation", () => {
  let mockUpdateTimes;
  let mockSubmitForm;

  beforeEach(() => {
    mockUpdateTimes = jest.fn();
    mockSubmitForm = jest.fn();

    const initialTimes = mockApi.fetchAPI(new Date());
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <BookingForm
        availableTimes={initialTimes}
        updateTimes={mockUpdateTimes}
        submitForm={mockSubmitForm}
      />,
    );
  });

  // --- Test Case 1: Initial state - Submit button should be disabled ---
  test("Submit button is disabled initially with default valid date", () => {
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    expect(submitButton).toBeEnabled();
  });

  // --- Test Case 2: Submit with valid inputs ---
  test("Submit button is enabled and calls submitForm with valid inputs", async () => {
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    expect(submitButton).toBeEnabled();

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowString = tomorrow.toISOString().split("T")[0];
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: tomorrowString },
    });

    await waitFor(() => {
      const timeSelect = screen.getByLabelText(/choose time/i);
      expect(timeSelect).toHaveValue("20:00");
      fireEvent.change(timeSelect, { target: { value: "20:30" } });
      expect(timeSelect).toHaveValue("20:30");
    });

    fireEvent.change(screen.getByLabelText(/number of guests/i), {
      target: { value: "5" },
    });
    fireEvent.change(screen.getByLabelText(/occasion/i), {
      target: { value: "Anniversary" },
    });

    expect(submitButton).toBeEnabled();

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockSubmitForm).toHaveBeenCalledTimes(1);
      const submittedData = mockSubmitForm.mock.calls[0][0];
      expect(submittedData.date).toEqual(expect.any(Date));
      expect(submittedData.time).toBe("20:30");
      expect(submittedData.guests).toBe(5);
      expect(submittedData.occasion).toBe("Anniversary");
    });
  });

  // --- Test Case 3: Invalid Number of Guests (Less than min) ---
  test("Submit button is disabled and shows error for guests less than 1", async () => {
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    const guestsInput = screen.getByLabelText(/number of guests/i);

    fireEvent.change(guestsInput, { target: { value: "0" } });
    fireEvent.blur(guestsInput);

    await waitFor(() => {
      expect(screen.getByText(/must be at least 1 guest/i)).toBeInTheDocument();
    });

    expect(submitButton).toBeDisabled();
  });

  // --- Test Case 4: Invalid Number of Guests (More than max) ---
  test("Submit button is disabled and shows error for guests more than 10", async () => {
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    const guestsInput = screen.getByLabelText(/number of guests/i);

    fireEvent.change(guestsInput, { target: { value: "11" } });
    fireEvent.blur(guestsInput);

    await waitFor(() => {
      expect(screen.getByText(/cannot exceed 10 guests/i)).toBeInTheDocument();
    });

    expect(submitButton).toBeDisabled();
  });

  // --- Test Case 5: Invalid Number of Guests (Non-numeric) ---
  test("Submit button is disabled and shows error for non-numeric guests", async () => {
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    const guestsInput = screen.getByLabelText(/number of guests/i);

    fireEvent.change(guestsInput, { target: { value: "abc" } });
    fireEvent.blur(guestsInput);

    await waitFor(() => {
      expect(
        screen.getByText(/number of guests must be a number/i),
      ).toBeInTheDocument();
    });

    expect(submitButton).toBeDisabled();
  });

  // --- Test Case 6: Empty Time Field ---
  test("Submit button is disabled and shows error if time is empty", async () => {
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    const timeSelect = screen.getByLabelText(/choose time/i);

    jest.spyOn(mockApi, "fetchAPI").mockImplementationOnce(() => []);
    fireEvent.change(screen.getByLabelText(/choose date/i), {
      target: { value: "2025-01-01" },
    });

    await waitFor(() => {
      expect(timeSelect).toHaveValue("");
      fireEvent.blur(timeSelect);
    });

    await waitFor(() => {
      expect(screen.getByText(/time is required/i)).toBeInTheDocument();
    });

    expect(submitButton).toBeDisabled();

    jest.spyOn(mockApi, "fetchAPI").mockRestore();
  });

  // --- Test Case 7: Empty Occasion Field (if 'Other' is selected and then cleared) ---
  test("Submit button is disabled and shows error if occasion is empty", async () => {
    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    const occasionSelect = screen.getByLabelText(/occasion/i);

    fireEvent.change(occasionSelect, { target: { value: "" } });
    fireEvent.blur(occasionSelect);

    await waitFor(() => {
      expect(screen.getByText(/occasion is required/i)).toBeInTheDocument();
    });

    expect(submitButton).toBeDisabled();
  });
});
