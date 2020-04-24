import React from 'react';
import {withHandlers, withPropsOnChange, compose, withState, lifecycle, mapProps} from 'recompose';


const renderVote = ({choices}) => (vote, idx) => {
    const color = choices[vote.choice] ? choices[vote.choice].color : "gray";
    return (<div className={"block-vote"} key={idx} style={{backgroundColor: color }}/>)
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