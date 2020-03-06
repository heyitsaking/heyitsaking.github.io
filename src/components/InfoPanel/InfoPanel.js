import React from 'react';
import './InfoPanel.css';

const InfoPanel = ({bgColor, cardTitle}) => {
    return (
        <div className={`flex justify-center info-panel ${bgColor} vh-50-ns`}>z
            <article className="flex flex-column justify-center hidden mt4 mh3 mb4">
                <h1 className="f4 bg-near-white br3 br--top black-60 mv0 pv2 ph3">{cardTitle}</h1>
                <div className="pa3 bt b--black-10 bg-white br--bottom br3">
                    <p className="f6 f5-ns lh-copy mw8">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum.
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                        vero eos et accusam et justo duo dolores et ea rebum.
                    </p>
                </div>
            </article>
        </div>
    )
};

export default InfoPanel;