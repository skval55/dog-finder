import React from "react";
import { useParams } from "react-router-dom";
import { doggyLibrary } from "./App";

const Dog = () => {
  const { name } = useParams();

  console.log({ name });
  const selectedDog = doggyLibrary.dogs.find((dog) => dog.name === name);

  return (
    <>
      <h1>{selectedDog.name}</h1>
      <h2>Age: {selectedDog.age}</h2>
      <img width="200px" src={selectedDog.src} />
      <p>{selectedDog.src}</p>
      {selectedDog.facts.map((fact) => (
        <p>{fact}</p>
      ))}
    </>
  );
};

export default Dog;
