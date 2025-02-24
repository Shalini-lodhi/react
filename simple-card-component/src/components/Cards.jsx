// Card.js
import React from "react";

const Card = ({ title, imageUrl, index, rate }) => {
  return (
    <div className="w-60 flex flex-col rounded-xl bg-black min-h-[19rem] ">
    <div>
      <img
        src={imageUrl}
        alt="test"
        className="object-cover object-center rounded-t-xl"
      />
    </div>
    <div className="flex flex-col py-3 px-3 pb-10">
      <div className="flex justify-between ">
        <h1 className="font-bold ">{title}</h1>
        <h1>Price</h1>
      </div>
      <div className="flex  justify-between">
        <p>{index}</p>
        <p>{rate}</p>
      </div>
    </div>
  </div>
    
  );
};

export default Card;
