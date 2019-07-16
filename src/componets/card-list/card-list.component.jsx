/* eslint-disable react/prop-types */
import React from 'react';
import Card from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
  return (
    <div className="card-list">
      {
        props.users.map((user) => <Card user={user} />)
      }
    </div>
  );
};

export default CardList;
