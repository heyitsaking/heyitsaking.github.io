import React from 'react';
import FiveStar from '../../images/5star.png';
import FourStar from '../../images/4star.png';
import ThreeStar from '../../images/3star.png';
import TwoStar from '../../images/2star.png';

const SkillPanel = ({ level, skills }) => {

    return (
        <div className="fl mw5-ns w-50 h-100-ns h-50 pa2">
            <div className="flex flex-column h-100 pv3 ph3" style={{'backgroundColor':'rgba(246,128,38,0.5)'}}>
                { // Find more efficient way to dynamically get images
                (level === 5 &&
                    <img src={FiveStar}
                        alt={`Skill Level`}
                        className={`flex self-center mw3 pb3`}/>) ||
                (level === 4 &&
                    <img src={FourStar}
                        alt={`Skill Level`}
                        className={`flex self-center mw3 pb3`}/>) ||
                (level === 3 &&
                    <img src={ThreeStar}
                        alt={`Skill Level`}
                        className={`flex self-center mw3 pb3`}/>) ||
                (level === 2 &&
                    <img src={TwoStar}
                        alt={`Skill Level`}
                        className={`flex self-center mw3 pb3`}/>)
                }
                <div className={`flex flex-column pb2`}>
                    {skills.map((skill, i) => {
                        return (
                            <span className={`pv1 light-gray f4`} key={i}>
                                {`- ${skill}`}
                            </span>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SkillPanel;