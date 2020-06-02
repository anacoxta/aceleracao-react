import React from 'react';
import './CardProduct.scss'
import Image from '../../assets/images/product.png'

const CardProduct = () => {
    return (
      <ul className="card-product-list">
        <li className="card-product-default" aria-labelledby="product-description">
          <span id="product-description"></span>
          <a href="#" className="card-product-default__info" aria-label="Detalhe do produto">
            <div className="card-product-default__inner">
              <img src={Image} alt={'alt'}/>
              <div className="card-product-default__inner card-product-default__inner--price-discount no-discount">
                <h3>30% OFF</h3>
              </div>
              <div className="card-product-default__inner card-product-default__inner--pricing">
              {/* [componente title description] */}
                <h2>NOME DO PRODUTO</h2>
                <p>R$ 69,90 <span className="no-remarcable">R$ 99,00</span></p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    )
}

export default CardProduct
