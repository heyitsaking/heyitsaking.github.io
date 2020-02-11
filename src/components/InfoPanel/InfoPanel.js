import React from 'react';
import './InfoPanel.css';

const InfoPanel = ({bgColor, cardTitle, cardType}) => {
    return (
        <div className={`flex justify-center info-panel ${bgColor}`}>
            {cardType === 'profile' ?
                <div className="mw9 w-100 center ph3-ns flex justify-center items-center">
                    <div className="cf ph2-ns w-100 justify-between-l">
                        <div className="fl w-100 w-third-l pa2">
                            <div className="white bg-white-20 pa4">
                                <h2>
                                    About me...
                                </h2>
                                <p>
                                    Aspiring developer with front-end experience.
                                </p>
                            </div>
                        </div>
                        <div className="fl w-100 w-third-l pa2">
                            <div className="outline bg-white pv4">
                                <img className={`w-auto h-auto`}
                                     src={`./profile.jpg`}
                                     alt={`Arturo A. King`}/>
                            </div>
                        </div>
                        <div className="fl w-100 w-third-l pa2">
                            <div className="white bg-white-20 pa4">

                            </div>
                        </div>
                    </div>
                </div>
            : (
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
            )}
        </div>
    )
}

export default InfoPanel;