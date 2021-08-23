import { useState } from "react";
import axios from "axios";
import dataGetter from "./dataGetter";

const useAxios = (curCards, cardType, url) => {
  const [cards, setCards] = useState(curCards);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const addResponse = async () => {
    try {
      const response = await axios.get(url);
      setCards(() => [...curCards, dataGetter(cardType, response)]);
    } catch (e) {
      setError(e);
      return error;
    }
    setIsLoading(false);
  };

  return [cards, addResponse];
};

export default useAxios;
