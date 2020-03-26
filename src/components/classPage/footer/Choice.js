import React from 'react';


const Choice = ({src, id, onChoice}) => {
    return (
        <div className={"choice"} onClick={event => onChoice(id)}>
            <img src={src}/>
        </div>
    )
}

export default Choice;