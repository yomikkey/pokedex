import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import axios from "axios";

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

export default function MediaCard(props) {
  // const [name, setName] = useState([]);
  const axios = require("axios");
  const [img, setImg] = useState('');

  useEffect(() => {
    getData()
    return () => {};
  },[]);

  async function getData() {
    try {
      let res = await axios({
        url: `https://pokeapi.co/api/v2/pokemon/${props.name}`,
        method: "get"
      });
      if (res.status === 200) {
        if (res.data.sprites.other["official-artwork"].front_default) {
            setImg(
              res.data.sprites.other["official-artwork"].front_default
            );
          } else {
            setImg(
              "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
            );
          }
      }
      return res.data;
    } catch (err) {
      console.error(err);
    }
  }


  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia
        component="img"
        height="200"
        width="75"
           image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {/* {capitalizeFirstLetter(props.data.name)} */}
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Click to Know More</Button>
      </CardActions>
    </Card>
  );
}
