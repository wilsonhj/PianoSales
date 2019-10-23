import React from 'react';

export default function ProductListItem(props) {
  const style = {
    border: '5px solid black',
    borderRadius: '7px'
  };
  return (
    <div style={style} className="card product-list-item align-items-center" key={props.id} onClick={() => props.setView('details', { id: props.id })} >
      <img className = "img-fluid frontpage-image" src={props.image}></img>
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">${props.price}</h6>
        <p className="card-text">{props.shortDescription}</p>
      </div>
    </div>
  );
}
