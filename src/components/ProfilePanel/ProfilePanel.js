import React from 'react';

const ProfilePanel = ({bgColor, onLinkClick}) => {
    let cardiLink = <span onClick={onLinkClick} className={`underline white hover-orange`}>Cardi</span>;

    return (
        <div className={`flex justify-center info-panel ${bgColor}`}>
            <div className="flex flex-row-ns items-center justify-between-ns ph5 mv3 mw8-ns w-75-m avenir">
                <div className="flex items-center w-75-l w-auto h-100-ns pv4-ns">
                    <div className="white tr-l tc f2-ns f4 fw3 pr3 pc0-ns pv5-ns pv4 h-100">
                        Aspiring developer with front-end experience using React and other Javascript
                        frameworks. Looking for opportunities to better myself in both front-end
                        and full-stack development. Currently residing in Jacksonville, FL, with my wife Mary Grayson
                        and our cat, {cardiLink} (a.k.a Nibbles).
                    </div>
                </div>
                <div className="flex-l items-center tc dn h-100 pv4">
                    <img src={require('./profile.jpg')}
                         alt={`Arturo A. King`}
                         className={`mw5`}/>
                </div>
            </div>
        </div>
    )
};

export default ProfilePanel;