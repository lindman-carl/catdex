import React from "react";

import CatImage from "../../assets/cat.webp";
import { Cat } from "../../types/catTypes";

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

type TitleProps = {
  name: string;
};

const Title = ({ name }: TitleProps) => {
  return <div className="title-container">{name}</div>;
};

type CardProps = {
  data: Cat;
};

const Card = ({ data }: CardProps) => {
  return (
    <div className="card-container">
      <Image />
      <Title name={data.name} />
    </div>
  );
};

export default Card;
