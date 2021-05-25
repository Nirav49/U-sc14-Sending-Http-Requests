import React from 'react'
import Lists from './Lists'

const Listitems = (props) => {
    return (
        <React.Fragment>
            {
                props.dat.map(d => {
                    return (
                        <Lists
                            id={d.id}
                            title={d.title}
                            openingText={d.openingText}
                            releaseDate={d.releaseDate}
                        />
                    )
                })
            }
        </React.Fragment>
    )
}

export default Listitems
