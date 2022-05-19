const choice = (items) => {

  const n = items.length;
  const random_number = Math.floor(Math.random() * n) + 1;
  const random_item = items[random_number];

  return random_item;
}


const remove = (items, item) => {
  const idx = items.indexOf(item);
  if (idx) {
    items.splice(idx, 1)
    console.log('Remaining', items)
  }
}


export { choice, remove }