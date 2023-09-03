import React, { useState } from 'react';
import SimpleSearch from '../search_components/SimpleSearch';
import AdvancedSearch from '../search_components/AdvancedSearch';

import '../style/search.css';

function Search() {
  const [isAdvanced, setAdvanced] = useState(false);

  const changeSearchKind = () => {
    setAdvanced(!isAdvanced);
  }

  return (
    <div>
      <div className={ isAdvanced ? 'advanced-search' : 'simple-search'} >
        <button className='btn-search' onClick={changeSearchKind}>{ isAdvanced ? "<- Proste" : "Zawansowane"}</button>  
        { isAdvanced ? <AdvancedSearch/> : <SimpleSearch/> }
      </div>
      <img src='./assets/mylogo_2.png' className='logo' alt='logo' />
    </div>
  );
}

export default Search;