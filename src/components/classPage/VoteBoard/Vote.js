import React from 'react';

const Vote = ({choice, choices, picture}) => {
    const filter = choices.find(c => c.id === choice);

    return (
        <div className={"vote"}>
            {filter ? <img className={"overlay"} src={filter.src}/> : null}
            <div className={"profileContainer"}>
                <img className={"profilePic"} src={picture}/>
            </div>

        </div>
    )
}


export default Vote