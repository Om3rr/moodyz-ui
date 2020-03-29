import React from 'react';
import {compose, lifecycle, withHandlers, withState} from 'recompose'
import {uploadImage} from "../services/api_service";

const UploadPage = ({onFileUpload, uploadFile, url}) => (
    <div className="upload-page">
        <h1>Upload Page :confetti:</h1>
        <div>
            <div>
                <input type="file" accept="image/*" multiple={false} onChange={onFileUpload}/>
                <button onClick={uploadFile}>Upload :D</button>
            </div>
            {url ? <div className={"profileContainer"}><img src={url}/></div> : null}
            <div>
                {url}
            </div>
        </div>
    </div>
)


const enhance = compose(
    withState('file', 'setFile', null),
    withState('url', 'setUrl', "https://res.cloudinary.com/djurf99ym/image/upload/v1585403762/punbxmop1chipuxaylrs.png"),
    withHandlers({
        uploadFile: ({file, setUrl}) => async () => {
            const {Response: {url}} = await uploadImage(file);
            setUrl(url);
        }
    }),
    withHandlers({
            onFileUpload: ({setFile}) => (event) => {
                const [file] = event.target.files;
                setFile(file)
            }
        }
    )
)


export default enhance(UploadPage)