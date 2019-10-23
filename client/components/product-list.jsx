import React from 'react';
import ProductListItem from './product-list-item.jsx';
import ProductsCarousel from './carousel.jsx';

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
        <div className="product-card col-sm-12 col-md-6 col-xl-4 p-1" key={obj.id} >
          <ProductListItem image={obj.image} name={obj.name} id={obj.id}
            price={obj.price} shortDescription={obj.shortDescription}
            setView = {this.props.view} >
          </ProductListItem>
        </div>
      );
    });
  }
  generateProductCarousel() {
    return (
      <ProductsCarousel items={this.state.products.map(obj => {
        return {
          src: obj.image,
          caption: obj.name
        };
      })}></ProductsCarousel>
    );
  }
  render() {
    // const style = {};
    // style.container = {
    //   height: '50vmin',
    //   width: '50vmin'
    // };
    return (
      <>
        <div className="container pt-5" >
          {this.generateProductCarousel()}
        </div>
        <div className="container grid-container">
          <div className="row">
            {this.generateProduct()}
          </div>
        </div>
      </>
    );
  }
}