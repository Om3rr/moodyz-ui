import React from 'react';
import {compose, lifecycle, withState} from 'recompose'
import Vote from "./VoteBoard/Vote";

const VoteBoard = ({students, choices}) => {
    return (
        <div className="voteboard">
            <div className="body">
                {
                    students ? students.map((student, idx) => (
                        <Vote key={idx} picture={student.face_url}
                              choice={student.vote.choice}
                              choices={choices}/>
                    )) : null
                }
            </div>
        </div>
    )
}


const enhance = compose(

)


export default enhance(VoteBoard)