import React from 'react';

function InfoPanel (props) {
    return (
        <div className={`flex justify-center info-panel ${props.bgColor}`}>
            {props.children}
        </div>
    )
};

export default InfoPanel;