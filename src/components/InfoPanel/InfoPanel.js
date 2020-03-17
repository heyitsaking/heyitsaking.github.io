import React from 'react';

function InfoPanel (props) {
    return (
        <div className={`flex justify-center info-panel ${props.bgColor}`}>
            <div className="flex flex-row-ns items-center justify-between-ns ph5 mv3 mw8-ns w-75-m avenir">
                {props.children}
            </div>
        </div>
    )
};

export default InfoPanel;