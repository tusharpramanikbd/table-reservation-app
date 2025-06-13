import React from "react";
import "./Specials.css";
import Button from "../../components/Button/Button";
import SpecialCard from "../../components/SpecialCard/SpecialCard";
import greekSalad from "../../assets/greek-salad.jpg";
import lemonDessert from "../../assets/lemon-dessert.jpg";
import bruchetta from "../../assets/bruchetta.svg";

const specialItems = [
  {
    id: 1,
    title: "Greek salad",
    price: "$12.99",
    details:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    image: greekSalad,
  },
  {
    id: 2,
    title: "Bruchetta",
    price: "$5.99",
    details:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. It has the authentic taste.",
    image: bruchetta,
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: "$5.00",
    details:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined. You can not forget the flavour.",
    image: lemonDessert,
  },
];

function Specials() {
  return (
    <section className="specials-container">
      <div className="specials-header">
        <h2>This Weeks Specials</h2>
        <Button title="See all menus" />
      </div>
      <div className="specials-content">
        {specialItems.map(({ id, ...rest }) => {
          return <SpecialCard key={id} {...rest} />;
        })}
      </div>
    </section>
  );
}

export default Specials;
