import React from "react";

const BootcampCard = ({ addClass, children, training}) => {
  return (
    <div className={"inline-block rounded overflow-hidden shadow-lg" + addClass}>
      <div><img src={ training.image } alt="Sunset in the mountains" /></div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{ training.name }</div>
          <p className="text-gray-700 text-base">
           { training.description }
          </p>
      </div>
    </div>
  );
};

export default BootcampCard;
