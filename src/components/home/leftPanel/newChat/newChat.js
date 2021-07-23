import React, { useState } from 'react'
import { Button, StyledMathPlus } from './newChat.elements';
import Modal from 'react-modal';
import plus from '../../../../assets/img/plus_button.svg';
import { useHistory } from 'react-router';

// Modal.setAppElement(document.getElementById('root'))

const modalStyles = {

}

function NewChat(props) {

    const history = useHistory();

    const changeRoute = () => {
        history.push("/home/addNewChat");
    }

    return (
        <>
            <Button onClick={changeRoute}>
                <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12 4C11.4477 4 11 4.44772 11 5V11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H11V19C11 19.5523 11.4477 20 12 20C12.5523 20 13 19.5523 13 19V13H19C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11H13V5C13 4.44772 12.5523 4 12 4Z"
                        fill="currentColor"
                    />
                </svg>
            </Button>

        </>
    )
}

export default NewChat;
