import React from 'react'
import { Button, StyledMathPlus } from './newChat.elements';
import plus from '../../../../assets/img/plus_button.svg';
// import { MathPlus } from 'css.gg';

// const SvgButton = () => {
//     return (
//         <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="26" cy="26" r="26" fill="#0072FF" />
//             <rect x="18.5714" y="24.762" width="15.7857" height="3.40476" rx="1.70238" fill="#E3EAF7" />
//             <rect x="24.7619" y="18.5714" width="3.40476" height="15.7857" rx="1.70238" fill="#E3EAF7" />
//         </svg>

//     );
// }

const onClickHandler = () => {

}

function NewChat() {
    return (
        <Button>
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
    )
}

export default NewChat;
