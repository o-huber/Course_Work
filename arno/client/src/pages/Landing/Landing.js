import React from 'react';

import './Landing.css';

import arno from '../../assets/arno.svg'
import phone from '../../assets/phone.png'

const Landing = props => {
  return (<div className='landing'>
		<header>
			<img src={arno} alt=""/>
			<a className='btn' href="/login">ВОЙТИ</a>
		</header>
		<div className='hero'>
			<div>
				<h1>
					Привіт, я – arno,<br/> відгадаю будь-яку пісню!
				</h1>
				<h4>
				Наспівай свої улюблені рядки і я спробую визначити<br/> якій композиції вони належать!
				</h4>
				<a className='btn' href="/login">УВІЙТИ</a>
			</div>
			<img className='phone' src={phone} alt=""/>
		</div>
  </div>);
};

export default Landing;
