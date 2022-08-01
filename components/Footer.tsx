import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import { Box } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Box
      display="flex"
      width="100%"
      flexDirection={{ xs: "column", sm: "column", md: "row" }}
      bgcolor="rgb(245, 245, 245);"
      height={{ xs: "auto", sm: "auto", md: "200px", lg: "200px", xl: "200px" }}
    >
      <Box
        width={{ xs: "100%", sm: "100%", md: "80%", lg: "80%", xl: "80%" }}
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <p className="pFooter">
          상호: (주)에이치앤제이제이 | 대표: 정용수 | 개인정보관리책임자: 정용수
          | 전화: 02-525-0039 | 이메일: hnjjdayday@naver.com 주소: 경기도 용인시
          기흥구 고매로234번길 32 | 사업자등록번호: 352-81-00026 | 통신판매:
          2019-용인기흥-1760 | 호스팅제공자: (주)식스샵 이용약관
          개인정보처리방침 사업자정보확인
        </p>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <Facebook className="icon" />
        <Instagram className="icon" />
        <YouTube className="icon" />
      </Box>
    </Box>
  );
}

export default Footer;
