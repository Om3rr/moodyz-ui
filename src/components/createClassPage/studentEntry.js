import React from 'react';
import {compose} from 'recompose'


const ehnance = compose();
const StudentEntry = ({student}) => {
    return (<div className={"student-line"}>
        <div className={"student-line--face"}>
            <div className={"circular"}>
                <img src={student.face_url}/>
            </div>
        </div>
        <div className={"student-line--title"}>
            {student.name}
        </div>
        <div className={"student-line--button"}>
            <button>X</button>
        </div>
    </div>)
}

export default ehnance(StudentEntry)






