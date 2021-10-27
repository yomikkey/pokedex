import { useState, useEffect } from "react";
import MediaCard from "./Card";
import Grid from "@mui/material/Grid";
import Pagination from "@mui/material/Pagination";
import Box from "@mui/material/Box";
// import { PaginationBar } from "./PaginationBar";
// import PositionedMenu from "../materalui_components/positioned_menu";
// import Typography from "@mui/material/Typography";

export const Pokemon = () => {
  const axios = require("axios");
  const [pokemon_list, setPokemonList] = useState(null);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(20);
  const [page_size, setPageSize] = useState(20);
  const [page, setPage] = useState(1);
  const [pagination_limit, setPaginationLimit] = useState(20);

  const handlePageChange = (event, value) => {
    if (value) {
      setStart((value - 1) * page_size);
      setEnd(value * page_size);
      setPage(value);
    }
  };

  useEffect(() => {
    getData().then((res) => console.log(`Data Fetched Successfully `));
    return () => {};
  }, [page]);

  useEffect(() =>{
    setStart((page - 1) * page_size);
    setEnd(page * page_size);
    
    if (page > pagination_limit) {
      setPage(pagination_limit);
    }
  }, [page, page_size]);

  async function getData() {
    try {
      let res = await axios({
        url: `https://pokeapi.co/api/v2/pokemon?limit=30&offset=${start}`,
        method: "get",
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
      <Box
        display="flex"
        justifyContent="right"
        alignItems="right"
        minHeight="10vh"
      >
        {/* <div> */}
        {/* <PaginationBar /> */}
      {/* </div> */}
        <Pagination
          page={page}
          sx={{ mb: 10 }}
          count={pagination_limit}
          color="primary"
          onChange={handlePageChange}
        />
      </Box>
      <Grid container spacing={10}>
        {/* <Grid item xs={7}> */}
        {pokemon_list 
          ? pokemon_list.map((list) => {
              return <MediaCard name={list.name} page={page} start={start} />;
            })
          : null}
        {/* </Grid> */}
      </Grid>
    </div>
  );
};
