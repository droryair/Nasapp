
import React from 'react';
import MediaCard from './MediaCard';

function Media(props) {

const isImgType=()=>{
    const url = props.card.url
    if(url.includes("youtube")){
        return false
    }else{
        return true
    }

}

  return (
    <div className="App"> 
        <MediaCard card={props.card} isImgType={isImgType()}/>
    </div>
  );
}

export default Media;


