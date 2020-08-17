import React from 'react';
import { GlobalStyle } from './styles/global.styles.css';
import Search from './Search';
import Picture from './Picture';
import Header from './Header';

const App = () => {

  return (
    <>
    <GlobalStyle/>
      <div className='app-container'>
        <Header/>
        <div className='break'></div>
        <Search />
        <div className='break'></div>
        <Picture />
      </div>
    </>
  );

};

export default App;