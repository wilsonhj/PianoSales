import React from 'react';

export default function Header(props) {
  return (
    <header className="text-center header border border-dark bg-primary text-white container-fluid">
      <div className="row-12 justify-content-between">
        <h1 className="d-inline-flex p-2">Wicked Sales</h1>
        <i className="fas fa-shopping-cart d-inline-flex " onClick={props.viewClick}> {props.cartItemCount} items </i>
      </div>
    </header>
  );
}
