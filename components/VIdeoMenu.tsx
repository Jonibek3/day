import React from "react";

import { Box } from "@mui/material";

function VideoMenu() {
  return (
    <Box
      width="100%"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      bgcolor="white"
    >
      <h2 className="h2player">News & Event</h2>
      <Box
        pt="100px"
        width="80%"
        height="600px"
        justifyContent="center"
        display="flex"
      >
        <video
          width="70%"
          height="100%"
          src={"img/usul.mp4"}
          autoPlay
          controls
          loop
        ></video>
      </Box>
    </Box>
  );
}

export default VideoMenu;
