import React from 'react';
import VoteFilter from "./VoteFilter";

const Vote = ({choice, choices, picture}) => {
    const filter = choices.find(c => c.id === choice);

    return (
        <div className={"vote"}>
            {filter ? <VoteFilter filter={filter}/> : null}
            <div className={"profileContainer"}>
                <img className={"profilePic"} src={picture}/>
            </div>

        </div>
    )
}


export default Vote