import React from 'react';
import './card.component.css';

export const Card = (props) => {
  return (
    <div className="card-container">
      <img alt="icon" src={`https://robohash.org/${props.user.id}?set=set2`} />
      <h2>{props.user.name}</h2>
      <p>{props.user.website}</p>
    </div>
  );
};

export default Card;
