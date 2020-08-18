import React, { useState } from 'react';
import { GlobalStyle } from './styles/global.styles.css';
import usePupFetcher from './hooks/usePupFetcher';
import Search from './Search';
import Picture from './Picture';
import Header from './Header';

const App = () => {

  const [breed, setBreed] = useState('poodle');
  const [picture, setPicture] = usePupFetcher('poodle');

  return (
    <>
    <GlobalStyle/>
      <div className='app-container'>
        <Header/>
        <div className='break'></div>
        <Search term={breed} search={setBreed} fetch={setPicture}/>
        <div className='break'></div>
        <Picture picture={picture}/>
      </div>
    </>
  );

};

export default App;