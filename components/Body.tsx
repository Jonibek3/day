import React from "react";
import { Box } from "@mui/material";
import { useState } from "react";

function Body() {
  const [active, setActive] = useState(false);
  let interval = setInterval(() => {
    setActive(!active);
  }, 3000);

  return (
    <Box width="100%" height="100vh">
      <Box
        width="100%"
        className={active ? "boxbody" : "boxbody2"}
        height="100vh"
      ></Box>
    </Box>
  );
}

export default Body;
