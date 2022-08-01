import { Box } from "@mui/system";
import type { NextPage } from "next";
import Body from "../components/Body";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Join from "../components/Join";
import Products from "../components/Products";
import VideoMenu from "../components/VIdeoMenu";

const Home: NextPage = () => {
  return (
    <Box width="100%">
      <Header />
      <Body />
      <Products />
      <Join />
      <VideoMenu />
      <Footer />
    </Box>
  );
};

export default Home;
