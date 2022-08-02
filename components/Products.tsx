import React from "react";
import { Box, Grid, TextField } from "@mui/material";
import Image from "next/image";
import kr from "/public/img/korichveni past.jpeg";
import zp from "/public/img/zangoripast.jpeg";
import krr from "/public/img/korichvine.jpeg";
import seriy from "/public/img/seriy.jpeg";
import pink from "/public/img/pink.jpeg";
import siyo from "/public/img/siyo.jpeg";

function Products() {
  const arr = [
    {
      Image: "/img/dOne.jpeg",
      namee: " 데이데이 중형(7매입)",
      priceOne: "1,875원",
      deletPrice: "2,500원",
    },
    {
      Image: "/img/dTwo.jpeg",
      namee: " 데이데이 중형(7매입)",
      priceOne: "1,875원",
      deletPrice: "2,500원",
    },
    {
      Image: "/img/dThree.jpeg",
      namee: " 데이데이 중형(7매입)",
      priceOne: "1,875원",
      deletPrice: "2,500원",
    },
    {
      Image: "/img/zangor.jpeg",
      namee: " 데이데이 중형(7매입)",
      priceOne: "1,875원",
      deletPrice: "2,500원",
    },
    {
      Image: "/img/korichveni past.jpeg",
      namee: " 데이데이 중형(7매입)",
      priceOne: "1,875원",
      deletPrice: "2,500원",
    },
    {
      Image: "/img/korichveni past.jpeg",
      namee: " 데이데이 중형(7매입)",
      priceOne: "1,875원",
      deletPrice: "2,500원",
    },
    {
      Image: "/img/korichveni past.jpeg",
      namee: " 데이데이 중형(7매입)",
      priceOne: "1,875원",
      deletPrice: "2,500원",
    },
    {
      Image: "/img/seriy.jpeg",
      namee: " 데이데이 중형(7매입)",
      priceOne: "1,875원",
      deletPrice: "2,500원",
    },
    {
      Image: "/img/pink.jpeg",
      namee: " 데이데이 중형(7매입)",
      priceOne: "1,875원",
      deletPrice: "2,500원",
    },
    {
      Image: "/img/siyo.jpeg",
      namee: " 데이데이 중형(7매입)",
      priceOne: "1,875원",
      deletPrice: "2,500원",
    },
  ];

  return (
    <Box
      bgcolor="white"
      display="flex"
      flexWrap="wrap"
      justifyContent={{
        xs: "center",
        sm: "center",
        md: "center",
        lg: "center",
        xl: "center",
      }}
      height="auto"
    >
      <h1 className="h1">Products</h1>
      {arr.map((item, index) => (
        <Box
          key={index}
          mt={{ xs: "50px" }}
          mb={{ xs: "50px" }}
          width={{
            xs: "300px",
            sm: "250px",
            md: "250px",
            lg: "270px",
            xl: "300px",
          }}
          height="auto"
          textAlign="center"
        >
          <Image
            alt="img"
            width="250px"
            height="300px"
            src={item.Image}
            objectFit="contain"
          />
          <h2>{item.namee}</h2>
          <Box justifyContent="center" display="flex">
            <p className="p">{item.priceOne}</p>
            <p className="pTwo">{item.deletPrice}</p>
          </Box>
        </Box>
      ))}
    </Box>
  );
}

export default Products;
