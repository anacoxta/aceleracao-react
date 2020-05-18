import React from 'react';
import './CardProduct.scss'
import Image from '../../assets/images/product.png'

const CardProduct = () => {
    return (
      <figure className="card-product-default detail">
        <a href="#" className="card-product-default__info">
          <div className="card-product-default__inner">
            <img src={Image} alt={'alt'}/>
            <div className="card-product-default__inner card-product-default__inner--price-discount detail__inner--price-discount no-discount">
              <h3>30% OFF</h3>
            </div>
            <ficaption className="card-product-default__inner card-product-default__inner--pricing">
              <h2>NOME DO PRODUTO</h2>
              <p>R$ 69,90 <span>R$ 99,00</span></p>
            </ficaption>
          </div>
        </a>
      </figure>
    )
}

export default CardProduct
