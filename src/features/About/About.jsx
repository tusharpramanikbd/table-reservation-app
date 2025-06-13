import React from "react";
import "./About.css";
import greekSalad from "../../assets/greek-salad.jpg";

function About() {
  return (
    <section className="about-container">
      <div>
        <h1>Little Lemon</h1>
        <h4>Chicago</h4>
        <p
          style={{
            marginTop: "16px",
          }}
        >
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint. Velit officia consequat
          duis enim velit mollit.{" "}
        </p>
      </div>
      <img src={greekSalad} alt="little-lemon-about" />
    </section>
  );
}

export default About;
