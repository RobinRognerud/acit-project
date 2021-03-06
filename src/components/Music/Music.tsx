import { TextField } from "@mui/material";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Music.css";

const Music: React.FC<any> = () => {
  var [url, setUrl] = useState("");

  return (
    <div>
      {process.env.REACT_APP_FLAGS !== "2" ? (
        <>
          <h4>
            {process.env.REACT_APP_FLAGS}
            Video of the best supporters in Norway, and possibility to add
            another video(wont save on refresh)
          </h4>
          <TextField
            id="input"
            variant="outlined"
            label="Youtube-URL"
            placeholder="www.youtube.com"
            margin="normal"
            onChange={(event) => setUrl(event.target.value)}
          />
          <ReactPlayer url="https://www.youtube.com/watch?v=cOP_4xFS7r8&t=103s" />
          <ReactPlayer url={url} />
        </>
      ) : (
        <p>Error</p>
      )}
    </div>
  );
};

export default Music;
