import axios from 'axios';
import React, { useState } from 'react';
import MediaCard from './MediaCard';


function Search(props) {
        const [results,setResults] = useState ([])
        
const handleChange=async(value)=>{
        const result = await axios.get(`https://images-api.nasa.gov/search?q=${value}`)
        await setResults(result.data.collection.items)
}


const addFavorite = async(newFavorite) => {
  const favoriteModel = await axios({
    method: 'post',
    url: 'http://localhost:3001/favorite',
    data: newFavorite
  });
}


  return (
    <div className="App">
        <input  onChange={e => handleChange(e.target.value)} placeholder="Search"></input>
        {results.map((r,i)=>{
            return(
                <MediaCard search={r} key={i} addFavorite={addFavorite} />
            )
        })}
    </div>
  );
}


export default Search;



