import React from 'react';
import {compose, withHandlers, withState, withPropsOnChange} from 'recompose'
import {ChangeOnChange} from "../../helpers/inputHelpers";
import {uploadImage, apiAddStudent} from "../../services/api_service";
import {FormattedMessage, useIntl} from "react-intl";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const onFileUpload = ({setPicDetails, setImgUpld, setImgLoading}) => async (event) => {
    const [file] = event.target.files;
    setImgLoading(true);
    const {Response} = await uploadImage(file);
    setPicDetails(Response);
    setImgUpld(true);
    setImgLoading(false);
};

const onImgClick = ({}) => () => {
    document.getElementById("fileUploader").click()
}

const onSave = ({klassSlug, name, gender, pictureDetails, addStudent, restartForm}) => async () => {
    const student = {
        name, pictureDetails, gender,
        pictureId: pictureDetails.id,
        id: Math.ceil(Math.random() * 100000),
    };
    try {
        const newStudent = await apiAddStudent(klassSlug, student);
        addStudent(newStudent);
        restartForm()
    } catch(error) {
        if(error.response.data.error) {
            alert(error.response.data.error)
        }
    }
};

const restartForm = ({setName, setPicDetails, setImgLoading, setImgUpld}) => () => {
    setName('')
    setPicDetails({})
    setImgLoading(false)
    setImgUpld(false)
}

const ehnance = compose(
    withState("name", "setName", ""),
    withState("gender", "setGender", "male"),
    withState("pictureDetails", "setPicDetails", {}),
    withState("imgIsLoading", "setImgLoading", false),
    withState("imgUploaded", "setImgUpld", false),
    withPropsOnChange(
        ["name", "imgUploaded"],
        ({name, imgUploaded}) => (
            {
                canAddStudent: name && imgUploaded
            }
        )
    ),
    withHandlers({restartForm}),
    withHandlers({
        onFileUpload, onSave, onImgClick
    })
    )

;
const StudentForm = ({onSave, canAddStudent, gender, setGender, setName, name, onFileUpload, imgIsLoading, imgUploaded, pictureDetails, onImgClick}) => {
    const intl = useIntl()
    return (
        <div className={"Rtable--row"}>
            <div className={"Rtable--cell ten"}></div>
            <div className={"Rtable--cell no-grow"} onClick={imgUploaded ? null : onImgClick}>
                {imgIsLoading ? <div className={"loader"}>Loading</div> : null}
                <div className={"circular"} style={{display: imgIsLoading ? "none" : "block"}}>
                    {imgUploaded ? null : <FontAwesomeIcon icon={"plus"}/> }
                    {
                        imgUploaded ? <img src={pictureDetails.url} onClick={onImgClick}/> : <img className={"anon"} src="/anon.png" style={{display: imgIsLoading ? "none": 'block'}}/>
                    }
                    <input type="file" id={"fileUploader"} accept="image/*" multiple={false} onChange={onFileUpload} style={{display: "none"}}
                           disabled={imgIsLoading}/>
                    {/*        {
                !imgUploaded ? (
                    <input type="file" accept="image/*" multiple={false} onChange={onFileUpload}
                           disabled={imgIsLoading}/>
                ) : <div className={"circular"}><img src={pictureDetails.url}/></div>
            }
            */}
                </div>
            </div>
            <div className={"student-line--title"}>
                <input type="text" placeholder={intl.formatMessage({id: 'student.name'})} value={name} onChange={ChangeOnChange(setName)}/>
            </div>
            <div>
                <select value={gender} onChange={ChangeOnChange(setGender)}>
                    <FormattedMessage id={"gender.male"}>
                        {(message) => <option value={'male'}>{message}</option>}
                    </FormattedMessage>
                    <FormattedMessage id={"gender.female"}>
                        {(message) => <option value={'female'}>{message}</option>}
                    </FormattedMessage>
                </select>
            </div>
            <div>

            </div>
            <div className={"student-line--button"}>
                <button disabled={!canAddStudent} onClick={onSave}>
                    <FontAwesomeIcon icon={["fas", "plus"]}/>
                </button>
            </div>
        </div>
    );
}

export default ehnance(StudentForm)






