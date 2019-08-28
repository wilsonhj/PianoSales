import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';
import ProductDetails from './product-details';

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
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <>
          <Header cartItemCount={this.state.cart.length}></Header>
          <ProductList className="container-fluid" view={this.setView}></ProductList>
        </>
      );
    } else {
      return (
        <>
          <Header cartItemCount={this.state.cart.length}></Header>
          <ProductDetails params={this.state.view.params} view={this.setView} addToCart={this.addToCart}></ProductDetails>
        </>
      );
    }
  }
}
