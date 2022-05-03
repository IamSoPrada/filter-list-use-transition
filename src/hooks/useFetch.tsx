import axios from "axios";
import { useEffect, useState } from "react";

export const useFetch = (url: string) => {
  const [entities, setEntities] = useState([]);

  const getPosts = async () => {
    try {
      const { data } = await axios.get(url);
      setEntities(data);
    } catch (err: any) {
      throw new Error(err);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  return [entities];
};
