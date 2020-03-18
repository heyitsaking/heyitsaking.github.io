import React from 'react';
import './App.css';
import InfoPanel from './components/InfoPanel/InfoPanel';
import NibDisplay from './components/NibDisplay/NibDisplay';
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
                <Modal isOpen={showModal} className={'h-100 w-100 flex items-center justify-center'}>
                    <NibDisplay onClick={() => {this.handleModal()}}/>
                </Modal>
                <div>
                    <div className={`jumbotron`}>
                        <div className={`main-text bg-black-40`}>
                            <header className={`tc flex flex-column justify-center items-center`}>
                                <h1 className={`f1-ns f2 ttu fw9 white-90 mv3`}>
                                    Arturo A. King
                                </h1>
                                <h2 className={`f2-ns f3 fw7 white-90 mt0 lh-copy`}>
                                    B.E. in Computer Engineering
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
                            <div className="flex-ns justify-around-ns fw3 cf w-100-ns mw7 ph2-ns ph2">
                                {data.experience.map((level, i) => {
                                    return (
                                        <SkillPanel level={level.proficiency} skills={level.skills} key={i}/>
                                    )
                                })}
                            </div>
                        </div>
                    </InfoPanel>
                </div>
                <footer className={`code`} style={{'background-image':'linear-gradient(to right, #F4F4F4, rgba(204, 204, 204, .7))'}}>
                    <div className={`flex flex-row ph5 pt3 f5`}>
                        <img src={require(`./images/crown.png`)}
                            alt={`Crown Icon`}
                            className={`mw4`}/>
                        <div className={`flex items-center`}>
                            <ul>
                                Contact Information:
                                <li className={`ml5 pl3`}>
                                    Email: arturo.a.king.p@gmail.com
                                </li>
                                <li className={`ml5 pl3`}>
                                    Mobile Phone: (404) 984-4477
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`w-100 tc f4 pb2`}>UI made with React</div>
                </footer>
            </div>
        );
    }
};

export default App;
