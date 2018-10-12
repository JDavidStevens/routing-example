import React, { Component } from 'react';
import axios from 'axios';

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: {},
    };
  }

  componentDidMount() {
    axios.get(`/api/products/${this.props.match.params.id}`).then(product => this.setState({ product: product.data }));
  }

  render() {
    const { name, description, category, image, price } = this.state.product;
    return (
      <section className="product-container">
        <div className="product-item">
          <img src={image} alt={name} />
          <div className="product-item-details">
            <h1 style={{ padding: 30 }}>ID: {this.props.match.params.id}</h1>
            <h3>{name}</h3>
            <p>{price}</p>
            <p>{description}</p>
            <p>{category}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Product;
