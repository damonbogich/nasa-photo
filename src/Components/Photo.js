import React from 'react';

export default function Photo(props) {
    console.log(props, 'props here')
    const { photo } = props;
    console.log(photo,'photo here')
    return(
        <div>
            <h1>Photo taken by: {photo.copyright}</h1>
            <img src={photo.url}/>
        </div>
    )
}