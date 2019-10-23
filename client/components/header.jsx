import React from 'react';

export default function Header(props) {
  return (
    <header id="wicked-header" className="text-center header text-white">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <h3 className="flex-grow-1">Wicked Sales</h3>
          <i className="fas fa-shopping-cart mr-3" onClick={props.viewClick}> {props.cartItemCount}</i>
        </div>
      </div>
    </header>
  );
}
