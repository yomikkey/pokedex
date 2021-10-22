import * as React from "react";
import { useState, useEffect } from "react";
import MediaCard from "./Card";
import Grid from "@mui/material/Grid";

export const Pokemon = () => {
  const axios = require("axios");
  const [pokemon_list, setPokemonList] = useState(null);

  useEffect(() => {
    getData().then((res) =>
      console.log(`Data Fetched Successfully `)
    );
    return () => {};
  }, []);

  async function getData() {
    try {
      let res = await axios({
        url: "https://pokeapi.co/api/v2/pokemon",
        method: "get"
      });
      if (res.status === 200) {
        setPokemonList(res.data.results);
        // setPokemonDetails(res.data);
        // console.log(pokemon_list);
        // console.log(res.data)
      }

      return res.data;
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <Grid container spacing={5}>
      {pokemon_list
        ? pokemon_list.map((list) => {
            return <MediaCard name={list.name} />;
            // return console.log(name.name)
          })
        : null}
        </Grid>
    </div>
  );
};
