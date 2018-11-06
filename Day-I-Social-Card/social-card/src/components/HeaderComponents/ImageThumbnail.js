import React from 'react';
import './Header.css';

function ImageThumbnail(props) {
    return <img src={props.src} alt={props.alt}></img>
}

export default ImageThumbnail;
