import React from 'react';

const Image = (props) => {
    return (
        <img src={props.image} alt={props.description} className={props.className}/>
    );
}

export default Image;
