import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function Item({ type, items, cantFind }) {
  const { id } = useParams();
  const navigate = useNavigate();

  let item = items.find((item) => item.id === id);
  if (!item) return navigate(cantFind);

  return (
    <section>
      <main>
        <p> {type} item</p>
        <Card>
          <CardBody>
            <h1>
              <CardTitle className="font-weight-bold text-center">
                {item.name}
              </CardTitle>
            </h1>
            <CardText className="font-italic">{item.description}</CardText>
            <p>
              <b>Recipe:</b> {item.recipe}
            </p>
            <p>
              <b>Serve:</b> {item.serve}
            </p>
          </CardBody>
          <div style={{ textAlign: "center" }}>
            <NavLink to="/snacks">{type} menu</NavLink>
            <br />
            <NavLink to="/">All menu</NavLink>
          </div>
        </Card>
      </main>
    </section>
  );
}

export default Item;
