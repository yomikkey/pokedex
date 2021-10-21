import * as React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1);
//   }

export default function MediaCard(props) {
    const [name, setName] = useState(null);
    const [img, setImg] = useState("");

    useEffect(() => {
      setName(props.data.name);
      // setImg(props.data.sprites.other["official-artwork"].front_default)
      if (props.data.sprites.other["official-artwork"].front_default) {
        setImg(props.data.sprites.other["official-artwork"].front_default);
      } else {
        setImg(
          "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
        );
      }
      return () => {};
    });
console.log(props);

  return (
    <Card sx={{ maxWidth: 350 }}>
      <CardMedia component="img" height="200" width="75" image={img}/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {/* {capitalizeFirstLetter(props.data.name)} */}
          {props.data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary"></Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Click to Know More</Button>
      </CardActions>
    </Card>
  );
}
