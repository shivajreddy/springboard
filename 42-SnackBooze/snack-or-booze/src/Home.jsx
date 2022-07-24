import React from "react";
import { Card, CardBody, CardTitle } from "reactstrap";

function Home({ snacks, drinks }) {
  // console.log("got these snacks", snacks);
  // console.log("got these drinks", drinks);
  return (
    <section className="col-md-8">
      <Card>
        <CardBody className="text-center">
          <CardTitle>
            <p className="font-weight-bold">
              Welcome to Silicon Valley's premier dive cafe!
            </p>
          </CardTitle>

          <div>
            <p>Total # of Snacks: {snacks.length}</p>
            <p>Total # of Drinks: {drinks.length}</p>
          </div>
        </CardBody>
      </Card>
    </section>
  );
}

export default Home;
