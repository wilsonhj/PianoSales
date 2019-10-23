import React from 'react';
// import Axios from 'axios';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditcard: '',
      address: '',
      error: {
        name: '',
        credit: '',
        address: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    if (this.state.name.length < 2 || !(/^[a-z A-Z]+$/).test(this.state.name)) {
      this.setState({
        error: {
          name: 'Upper and Lower Case Characters Required'
        }
      });
      return false;
    }
    if (this.state.creditcard.length !== 16 || isNaN(parseInt(this.state.creditcard))) {
      return false;
    }
    const addressRegex = /^[0-9]+[a-z A-Z]+[,.]*$/;
    if (this.state.address.length < 5 || !addressRegex.test(this.state.address)) {
      return false;
    } else {
      alert('Successfully validated input');
    }
    // Axios.post('/api/cart_checkout.php', {
    //   name: this.state.name,
    //   creditcard: this.state.creditcard,
    //   address: this.state.address
    // }).then(response => {
    //   console.log(response);
    //   })
    // }
  }

  render() {
    return (
      <div className="container">
        <h3>Checkout</h3>
        <p>Order Total: $ {this.props.cart.reduce((total, obj) => {
          return parseInt(obj.price, 10) + parseInt(total, 10);
        }, 0)}
        </p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name-input">First and Last Name</label>
            <input className="form-control" type="text" id="name-input" name="name" value={this.state.name} 
              placeholder="Luke Skywalker"
              required pattern="[A-Z a-z]{3,}"
              title="First and Last Name "
              onChange={this.handleChange}></input>
            <div>{this.state.error.name}</div>
          </div>
          <div className="form-group">
            <label htmlFor="creditcard-input">Credit Card</label>
            <input className="form-control" type="number" id="creditcard-input" placeholder="1234 5678 8900 0000"
              name="creditcard" value={this.state.creditcard}
              required pattern="[0-9]{16}"
              onChange={this.handleChange}></input>
          </div>
          <div className="form-group">
            <label htmlFor="shipping-input">Shipping Address</label>
            <textarea className="form-control" type="text" id="shipping-input" placeholder="1234 Main Los Angeles CA 92610"
              name="address" value={this.state.address}
              required pattern="[0-9]+[a-z A-Z]+[,.]*"
              onChange={this.handleChange}></textarea>
          </div>
          <button className="btn btn-link" onClick={() => this.props.view('catalog', {})}>Continue Shopping</button>
          <button type="submit" className="btn btn-success">Place Order</button>
        </form>
      </div>
    );
  }
}
