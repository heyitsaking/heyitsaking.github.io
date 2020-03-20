import React from 'react';
import './App.css';
import InfoPanel from './components/InfoPanel/InfoPanel';
import Modal from 'react-modal';
import data from './data/experience.json';
import SkillPanel from './components/SkillPanel/SkillPanel';

Modal.setAppElement('#root')

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        }
    }

    handleModal = () => {
        this.setState(prevState => ({ showModal: !prevState.showModal }));
    }

    render() {
        let cardiLink = <span onClick={this.handleModal} className={`underline light-white hover-orange`}>Cardi</span>;
        const { showModal } = this.state;

        return (
            <div>
                <Modal isOpen={showModal} 
                        onRequestClose={this.handleModal}
                        className={`center frame cover bg-center vh-75-ns vh-50 w-50-l w-75 dt br2`}>
                    <div className={`hide-child`}>
                        <div className={`w-100 h-100 child bg-black-60 br2`}>
                            <button onClick={this.handleModal} className={`bg-transparent ml2 mt2 white ba b--near-white`}>Close</button>
                            <div className={`flex justify-center flex-column v-mid w-100 vh-75-ns vh-50 white tc-ns ph4 f3-ns`}>
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
                </Modal>
                <div>
                    <div className={`jumbotron`}>
                        <div className={`main-text bg-black-40`}>
                            <header className={`tc flex flex-column justify-center items-center`}>
                                <h1 className={`f1-ns f2 ttu fw9 white-90 mv3`}>
                                    Arturo A. King
                                </h1>
                                <h2 className={`f2-ns f3 fw7 white-90 mt0 lh-copy`}>
                                    B.S. in Computer Engineering
                                </h2>
                            </header>
                        </div>
                    </div>
                    <InfoPanel title={`About me...`} bg={`navy`}>
                        <div className={`flex justify-between-ns mw8-ns w-75-m ph5`}>
                            <div className="w-75-l w-auto pt2-ns pb4-ns">
                                <div className="moon-gray tr-l tc f2-ns f4 fw3 pr3 pc0-ns pv2-ns pv4">
                                    Aspiring developer with front-end experience using React and other Javascript
                                    frameworks. Looking for opportunities to better myself in both front-end
                                    and full-stack development. Currently residing in Jacksonville, FL, with my wife Mary Grayson
                                    and our cat, {cardiLink} (a.k.a Nibbles).
                                </div>
                            </div>
                            <div className="db-l dn h-75 pv2">
                                <img src={require('./images/profile.jpg')}
                                    alt={`Arturo A. King`}
                                    className={`mw5`}/>
                            </div>
                        </div>
                    </InfoPanel>
                    <InfoPanel title={`Experience`} bg={`orange`}>
                        <div className="flex justify-center w-100 ph3-ns">
                            <div className="pb2 flex-ns justify-around-ns fw3 cf w-100-ns mw7 ph2-ns ph2">
                                {data.experience.map((level, i) => {
                                    return (
                                        <SkillPanel level={level.proficiency} skills={level.skills} key={i}/>
                                    )
                                })}
                            </div>
                        </div>
                    </InfoPanel>
                </div>
                <footer className={`code bt bw2 b--dark-blue`} style={{'backgroundImage':'linear-gradient(to right, #F4F4F4, rgba(204, 204, 204, .7))'}}>
                    <div className={`flex-ns flex-row ph5-l w-100 ph4-m pt3 f5`}>
                        <img src={require(`./images/crown.png`)}
                            alt={`Crown Icon`}
                            className={`mw4-ns mw3 h4-ns h3 pl0-ns pl4`}/>
                        <div className={`flex-ns w-50-ns w-100 items-center`}>
                            <ul>
                                Contact Information:
                                <li className={`ml5-l pl3-l`}>
                                    Email: arturo.a.king.p@gmail.com
                                </li>
                                <li className={`ml5-l pl3-l`}>
                                    Mobile Phone: (404) 984-4477
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`w-100 tc f4-ns f5 fw1-ns fw9 pb2`}>UI made with React</div>
                </footer>
            </div>
        );
    }
};

export default App;
