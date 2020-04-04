import React from 'react';
import {compose, withState, withHandlers} from 'recompose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {FormattedMessage} from "react-intl";
const copyTextToClipboard = ({student, setShowCopy}) => () => {
    setShowCopy(false)
    navigator.clipboard.writeText(student.url)
    setTimeout(() => setShowCopy(true), 3000)
}

const ehnance = compose(
    withState("showCopy", "setShowCopy", true),
    withHandlers({copyTextToClipboard})
);
const StudentEntry = ({student, idx, copyTextToClipboard, showCopy, onDelete}) => {
    return (<div className={"Rtable--row"}>
        <div className={"Rtable--cell ten"}>{idx + 1}</div>
        <div className={"student-line--face Rtable--cell no-grow"}>
            <div className={"circular"}>
                <img src={student.face_url}/>
            </div>
        </div>
        <div className={"student-line--title Rtable--cell"}>
            {student.name}
        </div>
        <div className={"Rtable--cell"}>
            <FormattedMessage id={`gender.${student.gender}`}/>
        </div>
        <div>
            {
                showCopy ?
                    <button onClick={copyTextToClipboard}>
                        <FormattedMessage id={"copy"}/>
                    </button> :
                    <div>
                        <FormattedMessage id={"copied"}/>
                    </div>
            }

        </div>
        <div className={"student-line--button Rtable--cell"} onClick={onDelete}>
            <FontAwesomeIcon icon={["fas", "trash"]}/>
        </div>
    </div>)
}

export default ehnance(StudentEntry)






