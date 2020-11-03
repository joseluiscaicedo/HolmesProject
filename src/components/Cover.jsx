import React from 'react';
import '../assets/styles/components/Cover.scss';
import Animation from 'react-typical';
import Header from './Header';

const Cover = () => (
  <section className='Cover'>
    <Header />
    <p className='Cover-Title'>
      Encuentra tu
      <p className='Cover__Title--Animation'>
        <Animation
          loop={Infinity}
          wrapper='b'
          steps={[
            'Casa Ideal',
            3000,
            'Apartamento Comodo',
            3000,
            'Tu Terreno',
            3000,
            'Tu Edificio',
            3000,
            'Hogar Soñado',
            3000,
            'Tu Holmes',
            3000,
          ]}
        />
      </p>

      ¡Ahora!
    </p>

  </section>
);

export default Cover;
