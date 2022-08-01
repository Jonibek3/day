import React from "react";

import { Box } from "@mui/material";
import Image from "next/image";
import image from "../public/img/image_1548826267907.png";

import { useEffect, useState } from "react";
import Menu from "./Menu";
// import Right from "./Right";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`${isScrolled && "white"}`}>
      <Box width="100%" height="40px" display="flex">
        <Box
          width={{ xs: "100%", sm: "100%", md: "50%", lg: "50%", xl: "50%" }}
          display="flex"
          ml={{ xs: "1px", sm: "1px", md: "100px", lg: "100px", xl: "100px" }}
          justifyContent={{
            xs: "center",
            sm: "center",
            md: "start",
            lg: "start",
            xl: "start",
          }}
          alignItems="center"
        >
          <Box
            width={{ xs: "30%", sm: "20%", md: "25%", lg: "20%", xl: "15%" }}
            height="20px"
            display="flex"
            justifyContent={{
              xs: "center",
              sm: "center",
              md: "start",
              lg: "start",
              xl: "start",
            }}
          >
            <Image alt="img" src={image} />
          </Box>
        </Box>
        <Box
          sx={{ listStyle: "none" }}
          width={{ xs: "10%", sm: "20%", md: "50%", lg: "50%", xl: "50%" }}
          display="flex"
          justifyContent="end"
          alignItems="center"
        >
          <ul>
            <li>
              <h1>
                <Menu />
              </h1>
            </li>
          </ul>
        </Box>
      </Box>
    </header>
  );
}

export default Header;
