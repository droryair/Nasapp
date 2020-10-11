import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


function MediaCard(props) {

    const cardLike = async (favorite,ToLike) => {
        if(ToLike){ //Search.jsx
            const title= favorite.data[0].title
            const img= favorite.links[0].href
            const explanation= favorite.data[0].description
            await props.addFavorite({title,img,explanation})
            console.log(`Saving "${favorite.data[0].title}" To The DB`)
        }else{ //Favorites.jsx
            await props.deleteFavorite(props.favorite)
            console.log(`Deleting "${favorite.title}" From The DB`)
        }
    }

    const showCard = () => {
        return (
            <div className="App">
                <h2>{props.card.title}</h2>
                <img src={props.card.url} alt='...'></img>
                <div>{props.card.copyright}  {props.card.date}</div>
                <span>{props.card.explanation}</span>
            </div>
        )
    }

    const showSearch = () => {
        return (
            <div>
                <h2>{props.search.data[0].title}</h2>
                {props.search.links &&
                    <img src={props.search.links[0].href} alt="..."></img>
                }
                <button onClick={() => cardLike(props.search,true)}>Like</button>
            </div>
        )
    }

    const showFavorites = () => {
        return (
            <div>
                <h2>{props.favorite.title}</h2>
                {/* <Link to={`favorites/${props.favorites._id}`} > */}
                     <img src={props.favorite.img} alt='...'></img>  
                     {/* </Link> */}
                <button onClick={() => cardLike(props.favorite,false)}>Unlike</button>
            </div>
        )
    }
// Navbar-> Favorites -> Favorites no id -> route server no id -> media card
// pic-> /favorites/:id -> Favorites with id-> route with id -> MediaCard (title,img,description)
// side tip: server finById- returns obj | find-returns array
//res.send([result])

    return (
        <div>
            {
                props.card
                    ? showCard()
                    : <div>
                        {props.search
                            ? showSearch()
                            : <div>
                                {props.favorite
                                    ? showFavorites()
                                    : <div></div>
                                }
                            </div>
                        }
                    </div>
            }
        </div>
    );
}

export default MediaCard;



///favourite/:id - render the MediaCard component, passing it a specific image's id to display from the DB (remember match?)
