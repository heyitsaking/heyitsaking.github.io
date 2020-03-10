import React from 'react';

const ProfilePanel = ({bgColor, onLinkClick}) => {
    return (
        <div className={`flex justify-center info-panel ${bgColor} vh-75-ns`}>
            <div className="flex-ns items-center justify-around-ns ph3-ns mv3 avenir">
                <div className="dtc-ns tc w-33-ns h-100-ns">
                    <div className="flex flex-column justify-center white bg-white-10 ph2-ns ph4 h-inherit f3">
                        Aspiring developer with front-end experience using React and other Javascript
                        frameworks. Looking for opportunities to better myself in both front-end
                        and full-stack development.
                    </div>
                </div>
                <div className="dtc-ns tc dn pv4 w-33-ns mw5">
                    <img src={require('./profile.jpg')}
                         alt={`Arturo A. King`}/>
                </div>
                <div className="dtc-ns tc w-33-ns h-100-ns">
                    <div className="flex flex-column justify-center white bg-white-10 ph2-ns pb0-ns ph4 pb4 h-inherit">
                        <div className={`f3 ws-normal pt0-ns pt3`}>
                            Currently residing in Jacksonville, FL, with my wife Mary Grayson
                            and our cat, <a href={`/#`} onClick={onLinkClick} className={`underline white hover-orange`}>Cardi</a> (a.k.a Nibbles).
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProfilePanel;