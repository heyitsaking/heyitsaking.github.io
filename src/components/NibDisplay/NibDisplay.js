import React from 'react';
import './NibDisplay.css';

const NibDisplay = ({onClick}) => {
    return (
        <div className={`frame h-75-ns h-50 w-50-ns w-75 hide-child dt br2 cover bg-center`}>
            <div className={`w-100 h-100 child bg-black-60`}>
                <button onClick={onClick} className={`bg-transparent ml2 mt2 h1 w1`}></button>
                <div className={`child flex justify-center flex-column v-mid w-100 h-100 white tc-ns ph4 f3-ns`}>
                    This is Cardi. We initially fostered her when she was two weeks
                    old, and then decided to keep her when she became adoptable, 
                    but we mostly call her Nibbles.
                    <div className={`white pt3`}>
                        Follow her adventures on <a
                        href={`https://www.instagram.com/cardic_calico/?igshid=h7riz1jen7v6`}
                        target={`_blank`}
                        className={`white`}>Instagram</a>! (@cardic_calico)
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NibDisplay;