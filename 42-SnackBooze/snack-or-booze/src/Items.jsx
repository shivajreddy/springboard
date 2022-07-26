import React from "react";
import SnackOrBoozeApi from "Api";
import ItemMenu from "ItemMenu";

function Items({ type }) {
  const [isLoading, setIsLoading] = React.useState(true);
  const [snacks, setSnacks] = React.useState([]);
  const [snacksSize, setSnacksSize] = React.useState(0);
  const [drinks, setDrinks] = React.useState([]);
  const [drinksSize, setDrinksSize] = React.useState(0);

  React.useEffect(() => {
    async function getSnacks() {
      let snacks = await SnackOrBoozeApi.getSnacks();
      setSnacks(snacks);
      setSnacksSize(Object.keys(snacks).length);
      setIsLoading(false);
    }
    async function getDrinks() {
      let drinks = await SnackOrBoozeApi.getDrinks();
      setDrinks(drinks);
      setDrinksSize(Object.keys(drinks).length);
      setIsLoading(false);
    }
    if (type === "snacks") getSnacks();
    if (type === "drinks") getDrinks();
  }, [type, snacksSize, drinksSize]);

  if (isLoading) {
    return <p>Loading &hellip; </p>;
  }

  return (
    <div>
      {type === "drinks" ? (
        <ItemMenu type="drinks" items={drinks} />
      ) : (
        <ItemMenu type="snacks" items={snacks} />
      )}
    </div>
  );
}

export default Items;
