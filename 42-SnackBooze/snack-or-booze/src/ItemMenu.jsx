import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "ItemMenu.css";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
} from "reactstrap";

function ItemMenu({ type, items }) {
  const navigate = useNavigate();

  function handleNewItem() {
    if (type === "drinks") {
      return navigate("/add-drink-item");
    } else if (type === "snacks") {
      return navigate("/add-snack-item");
    }
  }

  const itemType = type === "drinks" ? "Drinks" : "Snacks";

  return (
    // <section className="col-md-4">
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {itemType} Menu
          </CardTitle>
          <CardText>Choose one food items to order.</CardText>
          <ListGroup>
            {items.map((item) => (
              <Link to={`/${type}/${item.id}`} key={item.id}>
                <ListGroupItem style={{ color: "white" }}>
                  {item.name}
                </ListGroupItem>
              </Link>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
      <button onClick={handleNewItem} style={{ textAlign: "center" }}>
        Add New Item
      </button>
    </section>
  );
}

export default ItemMenu;
