import React from 'react';
import {compose, withState, withHandlers} from 'recompose'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {FormattedMessage} from "react-intl";
import {updateStudent, uploadImage} from "../../services/api_service";

const copyTextToClipboard = ({student, setShowCopy}) => async () => {
    setShowCopy(false)
    await navigator.permissions.query({
        name: 'clipboard-write'
    })
    navigator.clipboard.writeText(student.url)
    setTimeout(() => setShowCopy(true), 3000)
}

const onFileUpload = ({setImgLoading, student, refresh}) => async (event) => {
    const [file] = event.target.files;

    setImgLoading(true);
    const {Response: {id: image, url: url}} = await uploadImage(file);
    await updateStudent(student.id, image, student.name);
    await refresh()
    setImgLoading(false);
};

const clickUploadImage = ({student}) => () => {
    document.querySelector(`#fileuploader-${student.id}`).click();
}

const ehnance = compose(
    withState("showCopy", "setShowCopy", true),
    withState("imgLoading", "setImgLoading", false),
    withHandlers({copyTextToClipboard, clickUploadImage, onFileUpload})
);


const StudentEntry = ({student, imgLoading, idx, copyTextToClipboard, showCopy, onDelete, clickUploadImage, onFileUpload}) => {
    return (<div className={"Rtable--row"}>
        <div className={"Rtable--cell ten"}>{idx + 1}</div>
        <div className={"student-line--face Rtable--cell no-grow"}>
            <div className={"circular"}>
                <img src={student.face_url || "/avatar.png"} onClick={clickUploadImage} className={imgLoading ? "disabled": ""}/>
                <input type="file" id={`fileuploader-${student.id}`} accept="image/*"
                       multiple={false}
                       onChange={onFileUpload}
                       style={{display: "none"}}
                       disabled={imgLoading}/>
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






