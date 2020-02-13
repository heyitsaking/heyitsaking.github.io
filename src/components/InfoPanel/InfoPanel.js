import React from 'react';
import './InfoPanel.css';

const InfoPanel = ({bgColor, cardTitle, cardType, onLinkClick}) => {
    return (
        <div className={`flex justify-center info-panel ${bgColor}`}>
            {cardType === 'profile' ?
                <div className="mw9 w-100 center ph3-ns avenir">
                    <div className="cf ph2-ns w-100 justify-between-l h-100 flex-ns items-center">
                        <div className="fl w-100 w-third-ns pa2 mv2">
                            <div className="white bg-white-20 ph3 pv1">
                                <h2 className={`f3 fw9`}>
                                    About me...
                                </h2>
                                <p className={`f3`}>
                                    Aspiring developer with front-end experience using React and other Javascript
                                    frameworks. Looking for opportunities to better myself in both front-end
                                    and full-stack development.
                                </p>
                            </div>
                        </div>
                        <div className="fl di-ns dn w-100 h-75 w-third-ns pa2">
                            <div className="bg-transparent h-100 flex justify-center">
                                <img src={require('./profile.jpg')}
                                     alt={`Arturo King`}
                                     className={`profile-image`}
                                     />
                            </div>
                        </div>
                        <div className="fl w-100 w-third-ns pa2">
                            <div className="white bg-white-20 pa4">
                                <p className={`f3`}>
                                    Currently residing in Jacksonville, FL, with my wife Mary Grayson and our cat,
                                    <button onClick={onLinkClick}> Cardi</button> (a.k.a Nibbles).
                                </p>
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