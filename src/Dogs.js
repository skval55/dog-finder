import React from "react";
import { Link } from "react-router-dom";

const Dogs = ({ dogs }) => {
  return (
    <>
      {dogs.map((dog) => (
        <Link to={`/dogs/${dog.name}`}>{dog.name}</Link>
      ))}
    </>
  );
};

export default Dogs;
