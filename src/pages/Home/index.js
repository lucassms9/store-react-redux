import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { ProductList } from './styles';

function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-feminino/12/NQQ-0553-012/NQQ-0553-012_zoom2.jpg"
          alt="Tenis"
        />

        <strong>Tesni muito legal</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-feminino/12/NQQ-0553-012/NQQ-0553-012_zoom2.jpg"
          alt="Tenis"
        />

        <strong>Tesni muito legal</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-feminino/12/NQQ-0553-012/NQQ-0553-012_zoom2.jpg"
          alt="Tenis"
        />

        <strong>Tesni muito legal</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-adidas-run-falcon-feminino/12/NQQ-0553-012/NQQ-0553-012_zoom2.jpg"
          alt="Tenis"
        />

        <strong>Tesni muito legal</strong>
        <span>R$ 129,00</span>
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}

export default Home;
