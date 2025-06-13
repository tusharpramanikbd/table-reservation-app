import React from "react";
import "./Testimonials.css";
import ReviewCard from "../../components/ReviewCard/ReviewCard";

const reviewItems = [
  {
    id: 1,
    name: "Cris William",
    image: "https://avatar.iran.liara.run/public",
    review:
      "Absolutely delightful experience! The ambiance was cozy, and the pasta dish I had was simply divine, bursting with fresh flavors. I can't wait to come back for more!",
  },
  {
    id: 2,
    name: "Angelina Jollie",
    image: "https://avatar.iran.liara.run/public",
    review:
      "What a gem! The service here was attentive, and every dish, from appetizer to dessert, exceeded our expectations. Highly recommend their signature steak.",
  },
  {
    id: 3,
    name: "Will Smith",
    image: "https://avatar.iran.liara.run/public",
    review:
      "Fantastic food and a lovely atmosphere. We particularly enjoyed the crispy fried chicken and the friendly staff made our evening truly special. A definite must-visit!",
  },
  {
    id: 4,
    name: "John Wick",
    image: "https://avatar.iran.liara.run/public",
    review:
      "A truly satisfying meal! The flavors in their curry were complex and comforting, and the portions were very generous. This is now our go-to spot for a delicious dinner.",
  },
];

function Testimonials() {
  return (
    <section className="testimonials-bg">
      <div className="testimonials-container">
        <h2 style={{ textAlign: "center" }}>What our customers say!</h2>
        <div>
          {reviewItems.map(({ id, ...rest }) => (
            <ReviewCard key={id} {...rest} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
