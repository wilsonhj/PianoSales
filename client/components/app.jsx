import React from 'react';
import Header from './header.jsx';
import ProductList from './product-list.jsx';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header className=""></Header>
        <ProductList className="container-fluid"></ProductList>
      </>
    );
  }
}
