import React from 'react'
import NewChat from '../newChat/newChat';
import { Input, Form, Img } from './searchBar.elements';
function SearchBar() {
    return (
        <Form>
            <Img src={require("../../../../assets/img/search.svg")} />
            <Input placeholder="Find people and conversations" />
        </Form>
    )
}

export default SearchBar;
