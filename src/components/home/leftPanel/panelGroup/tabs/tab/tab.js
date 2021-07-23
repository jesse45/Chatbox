import React from 'react'
import { ListItems } from './tab.elements';

function Tab(props) {
    const { label, onClick, activeTab } = props;
    console.log(props);
    console.log(activeTab);
    console.log(label);
    return (
        <ListItems
            activeTab={activeTab === label}
            onClick={() => onClick(label)}>
            {label}
        </ListItems>
    );
}


export default Tab;
