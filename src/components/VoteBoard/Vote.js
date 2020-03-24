import React from 'react';


const choiceDict = {
    "1": "😉",
    "2": "😉",
    "3": "😉",
    "4": "😉",
}

const Vote = ({name, choice, x, y}) => {
    return (<div emoji={choiceDict['1']}
                 className="vote" style={{
            "top": `${y}%`,
            "right": `${x}%`,
        }}></div>
    )
}


export default Vote