import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';


function MediaCard(props) {

    const cardLike = async (favorite,ToLike) => {
        if(ToLike){
            const title= favorite.data[0].title
            const img= favorite.links[0].href
            const explanation= favorite.data[0].description
            await props.addFavorite({title,img,explanation})
        }else{ 
            await props.deleteFavorite(props.favorite)
        }
    }

    const showCard = () => {
        return (
            <div className="App">
                <h2>{props.card.title}</h2>
                {props.isImgType
                    ? <img src={props.card.url} alt='...'></img>
                    : <iframe width="420" height="315" src={props.card.url}> </iframe>
                }
                <div>{props.card.copyright}  {props.card.date}</div>
                <p>{props.card.explanation}</p>
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
                <Link to={`favorites/?id=${props.favorite._id}`} >
                     <img src={props.favorite.img} alt='...'></img>  
                     </Link>
                <button onClick={() => cardLike(props.favorite,false)}>Unlike</button>
            </div>
        )
    }

    const showBroadFavorite=()=>{
        return(
            <div>
                <h2>{props.broadFavorite.title}</h2>
                <img src={props.broadFavorite.img} alt='...'></img>  
                <p>{props.broadFavorite.explanation}</p>
            </div>
        )
    }

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
                                    : <div>
                                        {props.broadFavorite &&
                                         showBroadFavorite()
                                        }
                                    </div>
                                }
                            </div>
                        }
                    </div>
            }
        </div>
    );
}

export default MediaCard;



