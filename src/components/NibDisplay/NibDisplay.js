import React from 'react';

const NibDisplay = ({onClick}) => {
    return (
        <div className={`dt center pv1-m pv1-ns bg-light-gray mw8-l w-80-ns w-90 ba b--gray bw2 br4`}>
            <div className={`flex flex-row-reverse h1 mv1 mr1-ns`}>
                <button
                   onClick={onClick}
                   className={`w1 h1 bg-transparent br2 mr2 relative-ns relative`}></button>
            </div>
            <div className={`db-ns flex flex-column items-center pr1-ns`}>
                <div className={`db dtc-ns pl1-ns pa1`}>
                    <img src={require(`../../images/nib.jpg`)} alt="A bright blue sky"
                         className={`mw5 w5-ns ba pa1`}/>
                </div>
                <div className={`db dtc-ns v-mid ph2 pr2-ns pl1-ns f4-l f5`}>
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