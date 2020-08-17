import React from 'react';

const Search = ({ term, search }) => {
  return (
      <div className='ui form'>
        <input
          className='input'
          value={term}
          onChange={(e) => search(e.target.value)}
        />
      </div>
  );
};

export default Search;