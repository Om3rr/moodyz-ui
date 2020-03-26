import React from 'react';

const Vote = ({choice}) => {
    return (
        <div className={"vote"}>
            <img className={"overlay"} src={choice.src}/>
            <img className={"face"} src={"face.jpeg"}/>
        </div>
    )
}


export default Vote