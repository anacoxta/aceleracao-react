import React from 'react';
import './style.scss'
import Image from '../../assets/images/product.png'

const CardProduct = () => {
    return (
      <ul className="cardProductList">
        <li className="cardProductDefault" aria-labelledby="product-description">
          <span id="product-description"></span>
          <a href="#" className="cardProductDefault__info" aria-label="Detalhe do produto">
            <div className="cardProductDefault__inner">
              <img src={Image} alt={'alt'}/>
              <div className="cardProductDefault__inner cardProductDefault__inner--priceDiscount noDiscount">
                <h3>30% OFF</h3>
              </div>
              <div className="cardProductDefault__inner cardProductDefault__inner--pricing">
              {/* [componente title description] */}
                <h2>NOME DO PRODUTO</h2>
                <p>R$ 69,90 <span className="noRemarcable">R$ 99,00</span></p>
              </div>
            </div>
          </a>
        </li>
      </ul>
    )
}

export default CardProduct
