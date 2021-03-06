import CardMedia from "@material-ui/core/CardMedia";
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";
import zucc from "../Home/zuccarello.jpg";
import "./Home.css";

const Home: React.FC = () => {
  // process.env.REACT_APP_FLAGS
  //
  return (
    <div>
      {process.env.REACT_APP_FLAGS !== "1" ? (
        <Card id="card">
          <CardMedia
            component="img"
            src={zucc}
            alt="Zucca"
            height="345"
            title="CardMedia Image of Zuuuuuuucc"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Mats Zuccarello Aasen
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Founder and father of CataPult Hosting, we wish
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <p>Error</p>
      )}
    </div>
  );
};

export default Home;
