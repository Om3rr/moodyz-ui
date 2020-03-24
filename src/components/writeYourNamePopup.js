import React from 'react';
import {compose, lifecycle, withProps, withState} from 'recompose'
import Modal from 'react-modal';

const writeYourNamePopup = ({isOpen, setUsername, username, onCapture}) => {
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };
    return (
        <Modal
            style={customStyles}
            isOpen={isOpen}
            contentLabel="Example Modal"
        >
            <input type="text"
                   placeholder="Your name"
                   onChange={event => {
                       setUsername(event.target.value)
                   }}
                   value={username}/>
            <button onClick={() => onCapture(username)}>OK!</button>
        </Modal>
    )
};

const enhance = compose(
    withProps(({isOpen, onCapture}) => ({
        isOpen,
        onCapture: (username) => username ? onCapture(username) : null
    })),
    withState("username", "setUsername", "")
    )
;

export default enhance(writeYourNamePopup)