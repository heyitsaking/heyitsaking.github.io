import React from 'react';

function InfoPanel (props) {
    return (
        <div className={`flex flex-column items-center justify-center ${props.bgColor}`}>
            <h2 className={`w-50 tc white f2-ns f3 fw4 bb b--white bw1 pb2 ma-auto-ns mt3 mb0`}>{props.title}</h2>
            <div className="flex justify-between-ns ph5 pt3-ns mw8-ns w-75-m">
                {props.children}
            </div>
        </div>
    )
};

export default InfoPanel;