import React from 'react';
import {compose, lifecycle, withState} from 'recompose'
import VoteChoice from "./VoteBoard/VoteChoice";

const VoteBoard = () => {
    return (
        <div className="voteboard">
            <div className="voteboard--title">VoteBoard :D</div>
            <div className="voteboard--body">
                <VoteChoice title={"Choice 1"} votes={[1,2,3,4,5,6,7]}/>
                <VoteChoice title={"Choice 2"} votes={[1,2,3,4,5,6,7]}/>
                <VoteChoice title={"Choice 3"} votes={[1,2,3,4,5,6,7]}/>
                <VoteChoice title={"Choice 4"} votes={[1,2,3,4,5,6,7]}/>
            </div>
        </div>
    )
}


const enhance = compose()



export default enhance(VoteBoard)