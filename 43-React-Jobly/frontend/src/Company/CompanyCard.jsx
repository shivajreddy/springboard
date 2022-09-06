import React from "react";
import "styles/CompanyCard.css";

function CompanyCard(props) {
  const { name, description, numEmployees, logoUrl } = props.details;
  return (
    <div className="CompanyCard">
      <h5>Comp card</h5>
      <p>Name:{name}</p>
      <p>Description:{description}</p>
      <p>#Employees:{numEmployees}</p>
      <p>Logo:{logoUrl}</p>
    </div>
  );
}

export default CompanyCard;
