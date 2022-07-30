import React from "react";
import Bottombar from "../components/bottombar/Bottombar";
import Header from "../components/Header/Header";
import Pokelist from "../components/pokelist/Pokelist";

const Homepage = () => {
  return (
    <>
    <Header />
      <Pokelist />
      <Bottombar />
    </>
  );
};

export default Homepage;
