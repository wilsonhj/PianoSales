import React from 'react';

<<<<<<< HEAD
export default function Header() {
  return (
    <header className="text-center">Wicked Sales</header>
=======
export default function Header(props) {
  return (
    <header className="text-center header border border-dark bg-primary text-white container-fluid">
      <div className="row justify-content-between">
        <h1 className="d-flex p-2">Wicked Sales</h1>
        <i className="fas fa-shopping-cart d-infline-flex p-4" onClick={props.viewClick}> {props.cartItemCount} items </i>
      </div>
    </header>
>>>>>>> e3e4f034ae4149eb17ee9095f5ff70ebc926b90f
  );
}
