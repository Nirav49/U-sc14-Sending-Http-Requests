import React from 'react';
import classes from './Lists.module.css'

const Lists = (props) => {
    return (
        <ul className = {classes.ab}>
            <li>{props.id}</li>
            <li>{props.title}</li>
            <li>{props.openingText}</li>
            <li>{props.releaseDate}</li>
        </ul>
    )
}

export default Lists;