
const choice = (arr) => {
  const random_idx = Math.floor(Math.random() * arr.length);
  return arr[random_idx];
}


export default choice;