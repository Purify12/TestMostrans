import React from "react";
import Card from "../Card/Card";
import "./Cards.css";

const Cards = ({ results, page }) => {
  return (
    <>
      {results
        ? results.map((char) => {
            return <Card page={page} key={char.id} char={{ ...char }} />;
          })
        : "nooooo"}
    </>
  );
};

export default Cards;
