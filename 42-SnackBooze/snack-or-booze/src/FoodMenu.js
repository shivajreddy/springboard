import React from "react";
import { Link } from "react-router-dom";
import "./FoodMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function FoodMenu({ snacks, drinks }) {
  return (
    <section className="col-md-4">
      {snacks && (
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              Food Menu
            </CardTitle>
            <CardText>Choose one food items to order.</CardText>
            <ListGroup>
              {snacks.map((snack) => (
                <Link to={`/snacks/${snack.id}`} key={snack.id}>
                  <ListGroupItem style={{ color: "white" }}>
                    {snack.name}
                  </ListGroupItem>
                </Link>
              ))}
            </ListGroup>
          </CardBody>
        </Card>
      )}
      {drinks && (
        <Card>
          <CardBody>
            <CardTitle className="font-weight-bold text-center">
              Drinks Menu
            </CardTitle>
            <CardText>Enjoy some of our drinks</CardText>
            <ListGroup>
              {drinks.map((drink) => (
                <Link to={`/drinks/${drink.id}`} key={drink.id}>
                  <ListGroupItem style={{ color: "white" }}>
                    {drink.name}
                  </ListGroupItem>
                </Link>
              ))}
            </ListGroup>
          </CardBody>
        </Card>
      )}
    </section>
  );
}

export default FoodMenu;
