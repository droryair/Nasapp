import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Media from './Media';
import MediaCard from './MediaCard';


function Home() {

    const API_KEY = 'SQN9kiijHfeQi9R4djtxWj9tPRfVIjJoa7kx3KWD'
    const URL=`https://api.nasa.gov/planetary/apod?api_key=${API_KEY }`
    const [card,setCard] = useState()


    useEffect(() => {
        (async () => {
            const result = await axios.get(URL)
            await setCard(result.data)
        })()
    }, [])


    return (
        <div className="App">
            {card &&
            <Media card={card}/>
        }
    </div>
  );
}

export default Home;

