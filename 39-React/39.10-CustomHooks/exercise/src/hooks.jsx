import { useState } from "react";

function useFlipCard(defaultState = false) {
  const [status, setStatus] = useState(defaultState);
  const flipCard = () => setStatus((status) => !status);
  return [status, flipCard];
}

export default useFlipCard;
