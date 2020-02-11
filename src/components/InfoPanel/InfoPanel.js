import React from 'react';
import './InfoPanel.css';

const InfoPanel = ({bgColor, cardTitle, cardType}) => {
    return (
        <div className={`flex justify-center info-panel ${bgColor}`}>
            {cardType === 'profile' ?
                <article className="w-100 flex items-center justify-around">
                    <div className="white">
                        Info
                    </div>
                    <div className="white">
                        <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
                            <div className="tc">
                                <img src="./profile.jpg"
                                     className="br-100 h4 w4 dib black ba b--black-05 pa2"
                                     title="Photo of Arturo King"
                                     alt="Arturo A King"/>
                                <h1 className="f3 black mb2">Arturo A. King</h1>
                            </div>
                        </article>
                    </div>
                    <div className="white">
                        More info
                    </div>
                </article>
            : (
                <article className="hidden mt4 mh3 mb4">
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
            )}
        </div>
    )
}

export default InfoPanel;