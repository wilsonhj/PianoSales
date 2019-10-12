import React from 'react';

export default function CartSummaryItem(props) {
  return (
    <div className="card cart-summary-item bg-light" key={props.id}>
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <img className="img-fluid rounded mx-auto cart-picture" src={props.image}></img>
        </div>
        <div className="card-body col-xs-12 col-md-8 ">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">${props.price}</h6>
          <p className="card-text">{props.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}
