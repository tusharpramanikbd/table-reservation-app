import { render, screen } from "@testing-library/react";
import BookingPage from "../pages/BookingPage/BookingPage";

test("Renders the BookingForm heading", () => {
  render(<BookingPage />);
  const headingElement = screen.getByText("Book your table!");
  expect(headingElement).toBeInTheDocument();
});
