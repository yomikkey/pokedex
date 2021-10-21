import * as React from "react";
import { useState, useEffect } from "react";
import MediaCard from "./Card";

export const Pokemon = () => {
  const [pokemon_details, setPokemonDetails] = useState({});

  useEffect(() => {
    getData().then((res) => console.log("res"));
    return () => {
    }
  }, [])

  const axios = require("axios");

  async function getData() {
    try {
      let res = await axios({
        url: "https://pokeapi.co/api/v2/pokemon/pikachu",
        method: "get",
        timeout: 8000,
      });
      if (res.status === 200) {
      
        setPokemonDetails(res.data);
        console.log(res.status);
      }
     
      return res.data;
    } catch (err) {
      console.error(err); 
    }
  }

  return (
    <div>
      <MediaCard data={pokemon_details} />
    </div>
  );
};
