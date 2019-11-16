import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
  // utilizando conceito de estado
  state = {
    products: [],
    productInfo: {},
    page: 1,
  }

  // executa uma ação logo que o componente é exibido em tela. 
  componentDidMount() {
    this.loadProducts();
  }

  // usa-se arrow functions em funções criadas por nós, para não sobrescrever o this.  
  loadProducts = async (page = 1) => {
    const response = await api.get(`/products?page=${page}`);

    const { docs, ... productInfo } = response.data;

    this.setState({ products: docs, productInfo, page });
  }

  prevPage = () => {
    const { page, productInfo} = this.state;

    if (page === 1) return;

    const pageNumber = page - 1;

    this.loadProducts(pageNumber);
  }

  nextPage = () => {
    const { page, productInfo } = this.state;

    if (page === productInfo.pages) return;

    const pageNumber = page + 1;

    this.loadProducts(pageNumber);

  }

  render() {
    const { products, page, productInfo } = this.state

    return (
      <div className="product-list">
        {products.map(product => (
          <article key={product._id}>
            <strong>{product.title}</strong>
            <p>{product.description}</p>

            <a href="">Acessar</a>
          </article>
        ))}
        <div className="actions">
          <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
          <button disabled={page === productInfo.pages} onClick={this.nextPage}>Próximo</button>
        </div>
      </div>
    );
  }
}

