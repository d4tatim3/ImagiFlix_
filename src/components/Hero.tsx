import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons';

import Score from './Score';

import placeholder from '../assets/hero.jpg';

const Hero = ({ title = 'Avengers Endgame', score = 10 }) => (
  <header className="box-border realtive min-h-screen -mb-64">
    <img
      className="object-cover object-center w-full h-full "
      src={placeholder}
      alt="Filme em destaque"
    />
    <div className="absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black"></div>
    <article className="absolute bottom-0 mb-64 px-8">
      <p className="text-3xl">Assista agora:</p>
      <h2 className="text-6xl font-bold">{title}</h2>
      <p className="text-base">
        Nota{''}
        <Score value={score} />
      </p>

      <button className="text-base py-2 px-6 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out  hover:bg-opacity-75 hover:bg-white  hover:text-black">
        <FontAwesomeIcon className="mr-2" icon={faPlay} /> Assistir
      </button>
      <button className=" text-base py-2 px-6 mr-2 mt-8 rounded bg-black bg-opacity-50 transition-all duration-300 ease-in-out hover:bg-opacity-75 hover:bg-white  hover:text-black">
        <FontAwesomeIcon className="mr-2" icon={faPlus} /> Minha Lista
      </button>
    </article>
  </header>
);

export default Hero;
