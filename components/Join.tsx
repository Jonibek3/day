import React from "react";
import { Box, Button } from "@mui/material";

function Join() {
  return (
    <Box width="100%" height="500px" className="joinBody">
      <Box
        pt="100px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        lineHeight="150px"
      >
        <h2 className="h2Join">지금, 데이데이와 함께 하세요.</h2>
        <Button className="btn">Join</Button>
        <p className="pjoin">
          신규 회원을 위한 할인혜택, 구매 금액별 적립금과 쿠폰, 다양한 이벤트 등
          차별화된 혜택을 만나세요.
        </p>
      </Box>
    </Box>
  );
}

export default Join;
