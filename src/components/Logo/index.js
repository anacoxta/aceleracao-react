import React from 'react';
import { Link } from 'react-router-dom'

import './style.scss';

const Logo = () => <Link to='/' className='link'><span className='logo'>Fashionista</span></Link>;

export default Logo;
