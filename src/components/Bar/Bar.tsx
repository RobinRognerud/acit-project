import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import LibraryMusicIcon from "@mui/icons-material/LibraryMusic";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import BarChartIcon from "@mui/icons-material/BarChart";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import { useHistory } from "react-router";
import { useLocation } from "react-router-dom";
import "./Bar.css";

const Bar: React.FC<any> = () => {
  const history = useHistory();
  const location = useLocation();

  const [barHeader, setBarHeader] = useState("Home");

  useEffect(() => {
    if (location.pathname === "/quote") {
      setBarHeader("Quote");
    } else if (location.pathname === "/") {
      setBarHeader("Home");
    } else if (location.pathname === "/slideshow") {
      setBarHeader("Slideshow");
    } else if (location.pathname === "/chart") {
      setBarHeader("Chart");
    }
  }, [location.pathname]);

  return (
    <>
      <AppBar position="static">
        <Toolbar className="icons">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => history.push("/")}
          >
            <HomeIcon />
          </IconButton>
          <IconButton onClick={() => history.push("/music")} color="inherit">
            <LibraryMusicIcon />
          </IconButton>
          <IconButton onClick={() => history.push("/quote")} color="inherit">
            <FormatQuoteIcon />
          </IconButton>
          <IconButton onClick={() => history.push("/chart")} color="inherit">
            <BarChartIcon />
          </IconButton>
          <div className="barHeader">{barHeader}</div>
        </Toolbar>
      </AppBar>
      <h1>Catapult Hosting</h1>
    </>
  );
};

export default Bar;
