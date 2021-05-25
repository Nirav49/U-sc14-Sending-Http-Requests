import React, { useRef } from 'react';

import classes from './Addfilm.module.css';

function Addfilm(props) {
    const titleRef = useRef('');
    const openingTextRef = useRef('');
    const releaseDateRef = useRef('');

    function submitHandler(event) {
        event.preventDefault();

        const movie = {
            title: titleRef.current.value,
            openingText: openingTextRef.current.value,
            releaseDate: releaseDateRef.current.value,
        };

        props.onAddfilms(movie);
    }

    return (
        <form onSubmit={submitHandler} style ={{paddingBottom:'15px'}}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' ref={titleRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='opening-text'>Opening Text</label>
                <textarea rows='5' id='opening-text' ref={openingTextRef}></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor='date'>Release Date</label>
                <input type='text' id='date' ref={releaseDateRef} />
            </div>
            <button
                style={{
                    textAlign: 'center',
                    marginLeft: '50%',
                    padding: '10px',
                    fontSize: 'medium',
                    backgroundColor: 'purple',
                    color: 'white',
                    borderRadius: '5px',
                    borderColor: 'red'
                }}>Add Movie</button>
        </form>
    );
}

export default Addfilm;
