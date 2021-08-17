import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { object } from 'yup';
import UserService from '../../../../services/user_service';
import { setUser } from '../../../../store/actions/contacts';

const modifyUser = (elem) => {
    let createdAt = "created_at";
    let updatedAt = "updated_at";
    let lastRequestedAt = "last_request_at";
    console.log(elem);

    if (elem[0] === createdAt || elem[0] === updatedAt || elem[0] === lastRequestedAt) {
        return false;
    }
    else {
        return true;
    }
}

function AddNewChat(props) {
    const [groupValue, setGroupValue] = useState('')
    const [contact, setContact] = useState('')
    const [isLoading, setIsLoading] = useState([]);
    let users = [];

    const dispatch = useDispatch();

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
        // console.log(console);
        // console.log(contact);
        // console.log(groupValue);
        // console.log(event);


        let str = contact.trim();
        if (str.length > 2) {

            UserService.getListOfUsers(str)
                .then(results => {
                    console.log(results);
                    users = results.items;
                    //console.log(users);
                    setIsLoading(results.items);
                })
                .catch(error => {
                    console.log(error);

                })
        }

    }

    const addContact = (elem) => {
        console.log(elem);

        //const newElem = {...elem};

        const newElem = Object.fromEntries(
            Object.entries(elem.user)
                .filter(modifyUser)
        );
        console.log(newElem);

        dispatch(setUser(newElem))

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
            {isLoading.map(elem => {
                return <button onClick={() => { addContact(elem) }}>{elem.user.full_name}</button>
            })}
        </div>
    )
}

export default AddNewChat;
