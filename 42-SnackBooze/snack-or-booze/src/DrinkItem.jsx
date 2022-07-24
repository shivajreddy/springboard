import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function DrinkItem({ items, cantFind }) {
  const { id } = useParams();

  const navigate = useNavigate();

  let drink = items.find((drink) => drink.id === id);
  if (!drink) {
    console.log("cant find the drink, will navigate to", cantFind);
    return navigate("/drinks");
  }

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {drink.name}
          </CardTitle>
          <CardText className="font-italic">{drink.description}</CardText>
          <p>
            <b>Recipe:</b> {drink.recipe}
          </p>
          <p>
            <b>Serve:</b> {drink.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default DrinkItem;
