import React from "react";
import Topbar from "../components/topbar/Topbar";
import Pokelist from "../components/pokelist/Pokelist";
import Bottombar from "../components/bottombar/Bottombar";
import Header from "../components/Header/Header";

const Homepage = () => {
  return (
    <>
    <Header />
      {/* <Topbar /> */}
      <Pokelist />
      <Bottombar />
    </>
  );
};

export default Homepage;
