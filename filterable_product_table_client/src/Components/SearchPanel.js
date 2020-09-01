import React from 'react';

function SearchPanel(props) {
  return (
    <div className='searchPanel'>
      <input
        type='text'
        value={props.searchInput}
        onChange={props.handleSearchInput}
      />
      <br />
      <label>
        <input
          type='checkbox'
          checked={props.showStocked}
          onChange={props.handleCheck}
        />
        Only show products in stock
      </label>
    </div>
  );
}

export default SearchPanel;
