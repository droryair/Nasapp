import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import MediaCard from './MediaCard';



function Favorites(props) {
    const location = useLocation();
    const [favorites, setFavorites] = useState([])

    const deleteFavorite = async (favorite) => {
        const tempFavorites = [...favorites]
        const id = favorite._id
        const message = await axios.delete(`http://localhost:3001/favorite?id=${id}`)
        const deleteFavoriteIndex = tempFavorites.findIndex(f => f._id === favorite._id)
        tempFavorites.splice(deleteFavoriteIndex, 1)
        await setFavorites(tempFavorites)
    }

    useEffect(() => {
        if (location.search) {
            (async () => {
                const results = await fetchData(true)
                await setFavorites(results.data)
            })()
        } else {
            (async () => {
                const results = await fetchData(false)
                await setFavorites(results.data)
            })()
        }
    }, [])

    const fetchData = async (isId) => {
        let results
        if (isId) {
            results = await axios.get(`http://localhost:3001/favorites${location.search}`)

        } else {
            results = await axios.get('http://localhost:3001/favorites')
        }
        return results
    }

    return (
        <div className="App">
            {location.search &&favorites
            ?<div>  <MediaCard broadFavorite={favorites.find(f=>f._id===location.search.replace('?id=',''))} />  </div>
            : 
            <div>  {favorites.map((f, i) => <MediaCard key={i} favorite={f} deleteFavorite={deleteFavorite} />)}</div>
} 

        </div>
    );
}

export default Favorites;



