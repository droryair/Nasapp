import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MediaCard from './MediaCard';



function Favorites(props) {
    const [favorites, setFavorites] = useState([])

    const deleteFavorite = async (favorite) => {
        console.log("favorite", favorite)
        const tempFavorites = [...favorites]
        const id = favorite._id
        console.log('id', id)
        const message = await axios.delete(`http://localhost:3001/favorite?id=${id}`)
        console.log(message)
        // this should not be automatically deleted - should change 'unlike' back to 'like'
        const deleteFavoriteIndex = tempFavorites.findIndex(f => f._id === favorite._id)
        tempFavorites.splice(deleteFavoriteIndex, 1)
        await setFavorites(tempFavorites)
    }

    useEffect(() => {
        // console.log('props:',props)
        // if (props.match) {
        //     (async () => {
        //         const results = await fetchData(true)
        //     })()
        //     //router with id
        // } else {
            (async () => {
                const results = await fetchData()
                await setFavorites(results.data)
            })()
        // }
    }, [])

    const fetchData = async () => {
        let results
        // if (isId) {
            // results = await axios.get(`http://localhost:3001/favorites/${props.match.params.id}`)
        // } else {
            results = await axios.get('http://localhost:3001/favorites')
        // }
        return results
    }


    return (
        <div className="App">
            {favorites.map((f, i) =>
                <MediaCard key={i} favorite={f} deleteFavorite={deleteFavorite} />
            )}
        </div>
    );
}

export default Favorites;



///favourites - render the Favourites component --> The user's favourite images (from the DB)
