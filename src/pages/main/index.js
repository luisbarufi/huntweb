import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
  // executa uma ação logo que o componente é exibido em tela. 
  componentDidMount() {
    this.loadProducts();
  }

  // usa-se arrow functions em funções criadas por nós, para não sobrescrever o this.  
  loadProducts = async () => {
    const response = await api.get("/products");

    console.log(response.data.docs);
  }

  render() {
    return <h1>Hello Rocketseat</h1>
  }
}

