import React, { useState, useEffect } from 'react';
import './index.css';
import CONST from './data/constants';

import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Carousel from './components/Carousel';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const App = () => {
  const { URL, APISTRING } = CONST;

  const [movies, setMovies] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const movies = await fetch(
        `${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
      );

      const data = await movies.json();

      setMovies(data);
    };

    fetchData();
  }, []);

  useEffect(() => movies && console.log(movies), [movies]);

  return (
    <div className="m-auto antialised font-sans bg-black text-white">
      <>
        <Hero {...movies.results[0]} />
        <NavBar />
        <Carousel />
        <Carousel />
        <Carousel />
      </>
    </div>
  );
};

export default App;
