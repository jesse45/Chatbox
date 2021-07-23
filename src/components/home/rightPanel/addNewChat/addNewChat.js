import React, { useState } from 'react'
import UserService from '../../../../services/user_service';

function AddNewChat(props) {
    const [groupValue, setGroupValue] = useState('')
    const [contact, setContact] = useState('')

    const handleInputChange = (event) => {
        // event.preventDefault();
        const target = event.target;
        let name = target.name

        if (name === "groupName") {
            setGroupValue(target.value)
        }
        else {
            setContact(target.value);
        }

        console.log(name);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        console.log(console);
        console.log(contact);
        console.log(groupValue);
        console.log(event);
        UserService.getListOfUsers("j")
    }

    return (
        <div>
            <form onSubmit={handleOnSubmit}>
                <label>
                    Group name
                    <input
                        name="groupName"
                        type='text'
                        placeholder="Create a group name"
                        onChange={handleInputChange}
                        value={groupValue}
                    />
                </label>
                <br />
                <label>
                    Person
                    <input
                        type="text"
                        name="contactName"
                        value={contact}
                        onChange={handleInputChange}
                    />
                </label>

                <button >submit</button>
            </form>
        </div>
    )
}

export default AddNewChat;
