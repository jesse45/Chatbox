import React, { useState } from 'react'
import { Dialogs, Div, List } from './tabs.elements';
import Tab from './tab/tab';

function Tabs(props) {
    const [activeTab, setActiveTab] = useState(props.children[0].props.label)
    const switchTabs = (tab) => {
        setActiveTab(tab);
    }

    console.log(activeTab);
    return (
        <>
            <Div>
                <List>
                    {props.children.map((child) => {
                        const { label } = child.props;
                        return (
                            <Tab
                                activeTab={activeTab}
                                key={label}
                                label={label}
                                onClick={switchTabs}
                            />
                        );
                    })}
                </List>
            </Div>
            <Dialogs>
                {props.children.map((child) => {
                    if (child.props.label !== activeTab) return undefined;
                    return child.props.children;
                })}
            </Dialogs>
        </>
    );
}

export default Tabs;
