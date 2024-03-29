import React from 'react';

export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
  }
  componentDidMount() {
    fetch(`/api/products.php?id=${this.props.params.id}`)
      .then(response => response.json())
      .then(product => this.setState({ product }));
  }
  render() {
    if (this.state.product) {
      return (
        <div className="card product-details container-fluid col-12 " key = {this.state.product.id}>
          <div className="row card-body mt-3">
            <div className="col-sm-6 ">
              <button className="btn btn-link mb-3" onClick={() => this.props.view('catalog', {})}> Back to Catalog </button>
              <img src={this.state.product.image} className="img-fluid "></img>
            </div>
            <div className="col-sm-6">
              <h1 className="card-title mb-3">{this.state.product.name}</h1>
              <h6 className="card-subtitle mb-3">${this.state.product.price}.00</h6>
              <p className="card-text">{this.state.product.shortDescription}</p>
              <button className="btn btn-success" type="button" onClick={ () => this.props.addToCart(this.state.product) }>
                Add To Cart
                <i className="fas fa-cart-plus"></i>
              </button>
            </div>
          </div>
          <div className="row card-body">
            <div className="col-sm-12">
              { this.state.product.longDescription
                .split('\n')
                .map((str, idx) => <p key={idx}> {str} </p>) }
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
