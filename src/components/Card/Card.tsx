import React from "react";

import CatImage from "../../assets/cat.webp";

const Image = () => {
  return (
    <img
      className="image-container"
      src={CatImage}
      alt="cat"
      draggable={false}
    />
  );
};

const Title = () => {
  return <div className="title-container">Cat Breed</div>;
};

const Card = () => {
  return (
    <div className="card-container">
      <Image />
      <Title />
    </div>
  );
};

export default Card;
