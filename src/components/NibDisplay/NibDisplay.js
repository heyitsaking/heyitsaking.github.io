import React from 'react';

const NibDisplay = ({onClick}) => {
    return (
        <div className={`dt center pv1-m pv1-ns ph0-ns ph2 bg-white mw8-l w-80 ba b--orange bw2`}>
            <div className={`flex flex-row-reverse h1 mv1 mr1-ns`}>
                <a onClick={onClick}
                   className={`outline w1 h1 bg-transparent f5 flex items-center justify-center courier`}>X</a>
            </div>
            <div className={`pr1-ns`}>
                <div className={`db dtc-ns v-mid-ns pl1-ns pa1`}>
                    <img src={require(`./nib.jpg`)} alt="A bright blue sky"
                         className={`w-100 mw7 w5-ns`}/>
                </div>
                <div className={`db dtc-ns v-mid ph2 pr2-ns pl1-ns avenir f4-l f5-m`}>
                    <p className={`lh-copy tj navy`}>
                        This is Cardi. We initially fostered her when she was two weeks old. We then
                        decided to keep Cardi when she became adoptable, but we mostly call her Nibbles.
                    </p>
                    <p>
                        Follow her adventures on Instagram! <a
                        href={`https://www.instagram.com/cardic_calico/?igshid=h7riz1jen7v6`}>@cardic_calico</a>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default NibDisplay;