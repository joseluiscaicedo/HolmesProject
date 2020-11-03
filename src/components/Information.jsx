import React from 'react';
import '../assets/styles/components/Information.scss';
import goodhands from '../assets/images/GoodHands.jpg';
import ActionButton from './ActionButton';

const Information = ({ title }) => (
  <section className='Information'>
    <img className='Information__img' src={goodhands} alt='Good hands Img' />
    <div className='Information__content'>
      <hr className='Information__content--line' />
      <h1 className='Information__content--title'>{title}</h1>
      <p className='Information__content--paragraph'>Somos una compañia con amplia experiencia en el mercado de las bienes raíces. En busca siempre del mejor talento. Ese podrías ser TÚ.</p>
      <ActionButton mode='darkred' text='Leer Mas' />
    </div>
  </section>
);

export default Information;
