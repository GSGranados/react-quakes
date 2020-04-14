import React from 'react'

const QuakeElement = props => {
    console.log(props.location.state.quake.properties);
    return (
        <div>
            Quake Element!!!!!!
            {props.location.state.quake.properties.mag}
        </div>
    )
}

export default QuakeElement;
