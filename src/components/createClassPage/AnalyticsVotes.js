import React from 'react';
import {withHandlers, withPropsOnChange, compose, withState, lifecycle, mapProps} from 'recompose';


const renderVote = ({choices}) => (vote, idx) => {
    const choice = choices.find(c => c.id === vote.choice)
    const color = choice ? choice.color : "gray";
    return (<div className={"block-vote"} title={choice ? choice.moji : "blank"} key={idx}
                 style={{backgroundColor: color}}/>)
}
//votes, minDate, maxDate, choices
const AnalyticsVotes = ({renderVote, ordered_votes}) => (
    <>
        {ordered_votes.map((v, idx) => renderVote(v, idx))}
    </>
)

const enhance = compose(
    withHandlers({renderVote})
)


export default enhance(AnalyticsVotes)