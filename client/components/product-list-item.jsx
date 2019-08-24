import React from 'react';

export default function ProductListItem(props) {
  return (
    <div className="card product-card" key={props.id}>
      <img className = "img-fluid image" src={props.image}></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">${props.price}</h6>
        <p className="card-text">{props.shortDescription}</p>
      </div>
    </div>
  );
}
