import React from 'react';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditcard: '',
      address: ''
    };
  }
  render() {
    return (
      <div className="container">
        <h3>Checkout</h3>
        <p>Order Total: $ {this.props.cart.reduce((total, obj) => {
          return obj.price + total;
        }, 0)}
        </p>
        <form>
          <div className="form-group">
            <label htmlFor="name-input">Name</label>
            <input className="form-control" type="text" id="name-input"></input>
          </div>
          <div className="form-group">
            <label htmlFor="creditcard-input">Credit Card</label>
            <input className="form-control" type="text" id="creditcard-input" placeholder="1234 5678 8900 0000"></input>
          </div>
          <div className="form-group">
            <label htmlFor="shipping-input">Shipping Address</label>
            <textarea className="form-control" type="text" id="shipping-input" placeholder="1234 Main Los Angeles CA 92610"></textarea>
          </div>
          <button className="btn btn-link" onClick={() => this.props.view('catalog', {})}>Continue Shopping</button>
          <button type="submit" className="btn btn-success">Place Order</button>
        </form>
      </div>
    );
  }
}
