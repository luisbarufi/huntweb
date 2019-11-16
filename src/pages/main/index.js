import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
  // utilizando conceito de estado
  state = {
    products: [],
  }

  // executa uma ação logo que o componente é exibido em tela. 
  componentDidMount() {
    this.loadProducts();
  }

  // usa-se arrow functions em funções criadas por nós, para não sobrescrever o this.  
  loadProducts = async () => {
    const response = await api.get("/products");

    this.setState({ products: response.data.docs});
  }

  render() {
    return (
      <div className="product-list">
        {this.state.products.map(product => (
          <h2 key={product._id}>{product.title}</h2>
        ))}
      </div>
    );
  }
}

