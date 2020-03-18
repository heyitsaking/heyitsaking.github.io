import React from 'react';

function InfoPanel (props) {
    let orange = {
        backgroundColor: `rgba(221,85,12,0.97)`
    }

    let navy = {
        backgroundColor: `rgba(3,36,77,0.95)`
    }

    return (
        <div className={`flex flex-column items-center justify-center`} style={props.bg === 'navy' ? navy : orange}>
            <h2 className={`w-50 tc white f2-ns f3 fw4 bb b--white bw1 pb2 ma-auto-ns mt3 mb0`}>{props.title}</h2>
            <div className="flex justify-center w-100 pt3-ns">
                {props.children}
            </div>
        </div>
    )
};

export default InfoPanel;