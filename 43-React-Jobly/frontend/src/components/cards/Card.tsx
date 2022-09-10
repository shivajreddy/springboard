import React from "react";
import "../../styles/Card.css";

const wrapperStyle = {
  display: "grid",
};

function Card() {
  return (
    <div
      className="wrapper"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(12rem, 16rem))",
        gap: "2rem",
        justifyContent: "center",
      }}
    >
      <div className="card">
        <div className="card__body">
          <img src="/images/demo.avif" alt="demo-img" width={300} />
          <h2
            className="card__title"
            style={{
              color: "red",
            }}
          >
            Google
          </h2>
          <p className="card__description">sample description</p>
          <button className="card__btn">View Jobs</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
