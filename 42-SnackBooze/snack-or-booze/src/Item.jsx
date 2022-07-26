import React from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";
import SnackOrBoozeApi from "Api";

function Item({ type, cantFind }) {
  const { id } = useParams();
  console.log("serch for ", type, id);
  const navigate = useNavigate();

  const [itemId, setItemId] = React.useState(null);
  const [item, setItem] = React.useState(null);

  React.useEffect(() => {
    async function getSnackById() {
      const result = await SnackOrBoozeApi.getSnackId(id);
      console.log("result of get by id request", result);
      setItem(result);
    }

    async function getDrinkById() {
      const result = await SnackOrBoozeApi.getDrinkId(id);
      console.log("result of get by id request", result);
      setItem(result);
    }
    if (type === "snacks") {
      getSnackById();
      setItemId(id);
    }
    if (type === "drinks") {
      getDrinkById();
      setItemId(id);
    }
  }, [id, type]);

  if (!itemId)
    return (
      <div>
        <h2>
          NO {type} found with id: {id}
        </h2>
      </div>
    );

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
