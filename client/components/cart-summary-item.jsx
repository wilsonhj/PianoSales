import React from 'react';

export default function CartSummaryItem(props) {
  return (
    <div className="card cart-summary-item w-70 bg-light" key={props.id}>
      <div className="row">
        <div className="col-sm-4">
          <img className="card-img rounded mx-auto float-left cart-picture " src={props.image}></img>
        </div>
        <div className="card-body col-sm-8 float-right">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">${props.price}</h6>
          <p className="card-text">{props.shortDescription}</p>
        </div>
      </div>
    </div>
  );
}
