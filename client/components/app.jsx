import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';
import ProductDetails from './product-details';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.setView = this.setView.bind(this);
    this.state = {
      view: {
        name: 'catalog',
        params: {}
      }
    };
  }
  setView(name, params) {
    this.setState({ view: { name, params } });
  }
  render() {
    if (this.state.view.name === 'catalog') {
      return (
        <>
          <Header></Header>
          <ProductList className="container-fluid" view={this.setView}></ProductList>
        </>
      );
    } else {
      return (
        <>
          <Header></Header>
          <ProductDetails params={this.state.view.params} view={this.setView}></ProductDetails>
        </>
      );
    }
  }
}
