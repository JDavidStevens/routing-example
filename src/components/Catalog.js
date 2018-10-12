import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Catalog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    axios.get('/api/products').then(products => this.setState({ products: products.data }));
  }

  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {this.state.products.map(product => {
          return <Link to={`/product/${product.id}`}>Name: {product.name}</Link>;
        })}
      </div>
    );
  }
}

export default Catalog;
