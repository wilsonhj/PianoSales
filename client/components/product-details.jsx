import React from 'react';
import ReactDOM from 'react-dom';
import { ProductListItem as product } from './product-list-item';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount(id) {
    fetch(`/api/products.php?id=${id}`)
      .then(response => response.json())
      .then(product => this.setState({ product }));
  }
  render() {
    return (
      if(){

      }
    );
  }
}
