import React from 'react';

const Search = ({ term, search, fetch }) => {

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      fetch(term);
    }
  }

  return (
      <div className='ui form'>
        <div className='ui action input'>
          <input
            onKeyDown={handleKeyDown}
            className='input'
            value={term}
            onChange={(e) => search(e.target.value)}
            />
          <button type='button' className='ui button' onClick={() => fetch(term)}>Search</button>
        </div>
      </div>
  );
};

export default Search;