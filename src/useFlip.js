import { useState } from "react";

const useFlip = (face = true) => {
  const [isFaceUp, setIsFaceUp] = useState(face);
  const flip = () => {
    setIsFaceUp((isFaceUp) => !isFaceUp);
  };
  return [isFaceUp, flip];
};

export default useFlip;
