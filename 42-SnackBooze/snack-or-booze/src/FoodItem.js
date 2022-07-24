import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function FoodItem({ items, cantFind }) {
  const { id } = useParams();

  const navigate = useNavigate();

  let snack = items.find((snack) => snack.id === id);
  // if (!snack) return <Redirect to={cantFind} />;
  // if (!snack) return <Navigate to={cantFind} />;
  if (!snack) return navigate("/cantFind");

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {snack.name}
          </CardTitle>
          <CardText className="font-italic">{snack.description}</CardText>
          <p>
            <b>Recipe:</b> {snack.recipe}
          </p>
          <p>
            <b>Serve:</b> {snack.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default FoodItem;
