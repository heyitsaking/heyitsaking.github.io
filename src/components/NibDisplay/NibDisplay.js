import React from 'react';

const NibDisplay = ({onClick}) => {
    return (
        <div className={`dt center pv1-m pv1-ns ph0-ns ph2 bg-white mw8-l w-80 ba b--orange bw2 br4`}>
            <div className={`flex flex-row-reverse h1 mv1 mr1-ns`}>
                <span
                   onClick={onClick}
                   className={`outline w1 h1 bg-transparent f6 flex items-center justify-center courier`}>X</span>
            </div>
            <div className={`pr1-ns`}>
                <div className={`db dtc-ns v-mid-ns pl1-ns pa1`}>
                    <img src={require(`./nib.jpg`)} alt="A bright blue sky"
                         className={`w-100 mw7 w5-ns`}/>
                </div>
                <div className={`db dtc-ns v-mid ph2 pr2-ns pl1-ns avenir f4-l f5-m`}>
                    <div>
                        This is Cardi. We initially fostered her when she was two weeks old, and then
                        decided to keep her when she became adoptable, but we mostly call her Nibbles.
                    </div>
                    <div className={`pv2`}>
                        Follow her adventures on <a
                        href={`https://www.instagram.com/cardic_calico/?igshid=h7riz1jen7v6`}>Instagram</a>! (@cardic_calico)
                    </div>
                </div>
            </div>
        </div>
    )
};

export default NibDisplay;