import React from 'react';
import {compose, lifecycle, withState} from 'recompose'
import Vote from "./Vote";

const getRandomPointStyle = () => {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    return {
        x, y
    }
};

const VoteChoice = ({title, votes}) => {
    return (
        <div className="vote-choice">
            <div className="vote-choice--title">
                {title}
            </div>
            <div className="vote-choice--body">
                {[1,2,3,4,5].map(k => (<Vote key={k} {...getRandomPointStyle()}/>))}
            </div>
        </div>
    )
}


const enhance = compose()


export default enhance(VoteChoice)