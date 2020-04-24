import React from 'react';
import {withHandlers, withPropsOnChange, compose, withState, lifecycle} from 'recompose';
import AnalyticsVotes from "./AnalyticsVotes";


const AnalyticsEntry = ({student, ordered_votes, choices}) => (
    <div className={"Rtable--row"}>
        <div className={"Rtable--cell ten"}>{student.id}</div>
        <div className={"student-line--face Rtable--cell ten"}>
            <div className={"circular"}>
                <img src={student.face_url}/>
            </div>
        </div>
        <div className={"student-line--title Rtable--cell no-grow"}>
            {student.name}
        </div>
        <div className={"votes-container Rtable--cell"}>
                <AnalyticsVotes {...{ordered_votes, choices}}/>
        </div>
    </div>
)


const enhance = compose()

export default enhance(AnalyticsEntry)