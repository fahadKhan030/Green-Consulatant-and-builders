import React from "react";
import { useState, useEffect } from "react";
const Dogsdetails = () => {
  const [dogs, setdogs] = useState(null);

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setdogs(data);
        console.log(dogs);
      });
  });

  return (
    <div>
      <div>
        {dogs.map((dog) => (
          <img src={dog.message} alt="Random Dog" />
        ))}
      </div>
    </div>
  );
};

export default Dogsdetails;
