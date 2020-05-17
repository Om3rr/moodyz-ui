import React from 'react';


const Choice = ({moji, id, onChoice}) => {
    return (
        <div className={"choice"} onClick={event => onChoice(id)}>
            <button>
                {moji}
            </button>
        </div>
    )
}

export default Choice;