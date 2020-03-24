import React from 'react';
import {compose, lifecycle, withHandlers, withState} from 'recompose'
import {getVotes} from "../services/api_service";
import WriteYourNamePopup from '../components/writeYourNamePopup.js'
import VoteBoard from "../components/VoteBoard";

const ClassPage = ({votes, modalState, setModal, onCaptureUsername, username}) => {
    return (
        <div>
            {/*Hello {username}*/}
            {/*<button onClick={() => setModal(!modalState)}>OpenModal</button>*/}
            {/*<WriteYourNamePopup isOpen={modalState} onCapture={onCaptureUsername}/>*/}
            <VoteBoard votes={votes}/>
        </div>
    )
};


const enhance = compose(
    withState("votes", "setVotes", {}),
    withState("loading", "setLoading", true),
    withState("modalState", "setModal", false),
    withState("username", "setUsername", ''),
    withHandlers({
        onCaptureUsername: ({setUsername, setModal}) => (username) => {
            setModal(false);
            setUsername(username)
        }
    }),
    lifecycle({
        async componentDidMount() {
            const {classId, setLoading, setVotes} = this.props;
            const {votes} = await getVotes(classId);
            setVotes(votes)
            setLoading(false)
        }
    })
)


export default enhance(ClassPage)