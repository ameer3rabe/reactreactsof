import React from 'react';

const ObjectCard = ({ object }) => {
  return (
    <div className="object-card">
      <img src={object.image} alt={object.name} />
      <h3>{object.name}</h3>
      <p>{object.description}</p>
    </div>
  );
};

export default ObjectCard;
