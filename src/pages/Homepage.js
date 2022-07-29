import React from "react";
import Topbar from "../components/topbar/Topbar";
import Pokelist from "../components/pokelist/Pokelist";
import Bottombar from "../components/bottombar/Bottombar";

const Homepage = () => {
  return (
    <>
      <Topbar />
      <Pokelist />
      <Bottombar />
    </>
  );
};

export default Homepage;
