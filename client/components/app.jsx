import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';
import ProductDetails from './product-details';
import CartSummary from './CartSummary.jsx';
import CheckoutForm from './checkout-form.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      },
      cart: []
    };
  }
  setView(name, params) {
    this.setState({ view: { name, params } });
  }
  getCartItems() {
    fetch('/api/cart.php')
      .then(response => response.json())
      .then(cart => this.setState({ cart }));
  }
  componentDidMount() {
    this.getCartItems();
  }
  addToCart(product) {
    fetch('/api/cart.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(response => response.json())
      .then(product => this.setState({ cart: [...this.state.cart, product] }));
  }

  placeOrder({ name, creditCard, shippingAddress }) { // obj destructuring
    fetch('/api/orders.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, creditCard, shippingAddress, cart: this.state.cart }) // combine obj with App Cart state
    }).then(response => response.json())
      .then(response => this.setState({
        cart: [], // reset cart to empty array
        view: { name: 'catalog', params: {} } // change the App's view state back
      }));
  }
  renderView() {
    // switch case
  }

  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <>
          <Header cartItemCount={this.state.cart.length} viewClick={() => this.setView('cart', {}) }></Header>
          <ProductList className="container-fluid" view={this.setView}></ProductList>
        </>
      );
    } else if (this.state.view.name === 'details') {
      return (
        <>
          <Header cartItemCount={this.state.cart.length} viewClick={() => this.setView('cart', {}) }></Header>
          <ProductDetails params={this.state.view.params} view={this.setView} addToCart={this.addToCart}></ProductDetails>
        </>
      );
    } else if (this.state.view.name === 'cart') {
      return (
        <>
          <Header cartItemCount={this.state.cart.length} viewClick={() => this.setView('cart', {}) }></Header>
          <CartSummary cart={this.state.cart} view={this.setView}> </CartSummary>
        </>
      );
    } else if (this.state.view.name === 'checkout') {
      return (
        <>
          <Header cartItemCount={this.state.cart.length} viewClick={() => this.setView('cart', {}) }></Header>
          <CheckoutForm cart={this.state.cart} view={this.setView}></CheckoutForm>
        </>
      );
    }
  }
}
