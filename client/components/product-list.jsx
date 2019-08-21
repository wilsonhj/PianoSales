import React from 'react';
import ReactDOM from 'react-dom';
import ProductListItem from './product-list-item.jsx';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }
  getProducts() {
    fetch('/api/products.php')
      .then(response => response.json())
      .then(products => this.setState({ products }));
  }
  componentDidMount() {
    this.getProducts();
  }
  generateProduct() {
    return this.state.products.map((obj, val) => {
      return (
        <div className="col" key={obj.id} >
          <ProductListItem image={obj.image} name={obj.name}
            price={obj.price} shortDescription={obj.shortDescription}>
          </ProductListItem>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          {this.generateProduct()}
        </div>
      </div>
    );
  }
}