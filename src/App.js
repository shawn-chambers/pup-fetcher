import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { GlobalStyle } from './styles/global.styles.css';
import Search from './Search';
import Picture from './Picture';
import Header from './Header';

const App = () => {

  const [breed, setBreed] = useState('poodle');
  const [picture, setPicture] = useState('');
  const [fetch, setFetch] = useState('poodle');
  const [isError, setError] = useState(false);

  useEffect(() => {
    const query = async () => {
      try {
        const results = await axios.get(`https://dog.ceo/api/breed/${fetch}/images/random`);
        setError(false);
        setPicture(results.data.message);
      } catch {
        setError(true);
      }
    }
    query();
  }, [fetch]);

  return (
    <>
    <GlobalStyle/>
      <div className='app-container'>
        <Header/>
        <div className='break'></div>
        <Search term={breed} search={setBreed} fetch={setFetch}/>
        <div className='break'></div>
        <Picture picture={picture} error={isError}/>
      </div>
    </>
  );

};

export default App;