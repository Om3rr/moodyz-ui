import React from 'react';
import {compose, lifecycle, withState} from 'recompose'
import Vote from "./VoteBoard/Vote";

const VoteBoard = ({votes, choices}) => {
    return (
        <div className="voteboard">
            <div className="body">
                {
                    votes ? votes.map((vote, idx) => (
                        <Vote key={idx} choice={choices.find(c => c.id === vote.choice)}/>
                    )) : null
                }
                {
                    votes ? votes.map((vote, idx) => (
                        <Vote key={idx} choice={choices.find(c => c.id === vote.choice)}/>
                    )) : null
                }
            </div>
        </div>
    )
}





const enhance = compose(

)


export default enhance(VoteBoard)