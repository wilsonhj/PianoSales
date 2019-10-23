import React from 'react';

export default function CartSummaryItem(props) {
  const o = {};
  o.img = {
    backgroundImage: `url(${props.image})`,
    backgroundPosition: 'center',
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    padding: '5px',
    height: '200px'
  };
  return (
    <div className="card col-12 col-md-6 col-xl-4 bg-light" key={props.id}>
      <div className="rounded card-img-top" style={o.img}></div>
      <div className="card-body col-xs-12 col-md-8 ">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">${props.price}</h6>
        <p className="card-text">{props.shortDescription}</p>
      </div>
    </div>
    // </div>
  );
}
