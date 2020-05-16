import React from 'react'

import './Image.css'

const Image = ({ className, src, alt }) => {
  return (
    <figure className={className}>
      <img src={src} alt={alt}/>
    </figure>
  )
}

export default Image