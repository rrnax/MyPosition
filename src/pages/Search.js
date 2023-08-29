import React, { useState } from 'react';
import SimpleSearch from '../search_components/SimpleSearch';
import AdvancedSearch from '../search_components/AdvancedSearch';

function Search() {
  const [isAdvanced, setAdvanced] = useState(false);

  const changeSearchKind = () => {
    setAdvanced(!isAdvanced);
  }

  return (
    <div>
      <button onClick={changeSearchKind}>{ isAdvanced ? "Prosty" : "Zawansowany"}</button>  
      { isAdvanced ? <AdvancedSearch/> : <SimpleSearch/> }
      </div>
  );
}

export default Search;