import React from 'react';
import {compose, withHandlers, withState, withPropsOnChange} from 'recompose'
import {ChangeOnChange} from "../../helpers/inputHelpers";
import {uploadImage, apiAddStudent} from "../../services/api_service";


const onFileUpload = ({setPicDetails, setImgUpld, setImgLoading}) => async (event) => {
    const [file] = event.target.files;
    setImgLoading(true);
    const {Response} = await uploadImage(file);
    setPicDetails(Response);
    setImgUpld(true);
    setImgLoading(false);
};

const onImgClick = ({}) => () => {
    console.log("HEY");
    document.getElementById("fileUploader").click()
}

const onSave = ({name, pictureDetails, addStudent, restartForm}) => async () => {
    const student = {
        name, pictureDetails,
        pictureId: pictureDetails.id,
        id: Math.ceil(Math.random() * 100000),
    };
    try {
        const newStudent = await apiAddStudent(student)
        addStudent(newStudent)
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
const StudentForm = ({onSave, canAddStudent, setName, name, onFileUpload, imgIsLoading, imgUploaded, pictureDetails, onImgClick}) => (
    <div className={"student-line"}>
        <div className={"student-line--face"}>
            {imgIsLoading ? <div className={"loader"}>Loading</div> : null}
            <div className={"circular"}>
                {
                    imgUploaded ? <img src={pictureDetails.url} onClick={onImgClick}/> : <img className={"anon"} src="/anon.png" onClick={onImgClick} style={{display: imgIsLoading ? "none": 'block'}}/>
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
            <input type="text" placeholder={"Student Name"} value={name} onChange={ChangeOnChange(setName)}/>
        </div>
        <div className={"student-line--button"}>
            <button disabled={!canAddStudent} onClick={onSave}>Add</button>
        </div>
    </div>
);

export default ehnance(StudentForm)






