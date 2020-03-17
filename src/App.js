import React from 'react';
import './App.css';
import InfoPanel from './components/InfoPanel/InfoPanel';
import NibDisplay from './components/NibDisplay/NibDisplay';
import Modal from 'react-modal';

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
        let cardiLink = <span onClick={this.handleModal} className={`underline white hover-orange`}>Cardi</span>;
        const { showModal } = this.state;

        return (
            <div>
                <Modal isOpen={showModal} className={'h-100 w-100 flex items-center justify-center'}>
                    <NibDisplay onClick={() => {this.handleModal()}}/>
                </Modal>
                <div>
                    <div className={`jumbotron`}>
                        <div className={`main-text bg-black-40`}>
                            <header className={`resize tc flex flex-column justify-center items-center`}>
                                <h1 className={`f1-ns f2 ttu fw9 white-90 mv3`}>
                                    Arturo A. King
                                </h1>
                                <h2 className={`f2-ns f3 fw7 white-90 mt0 lh-copy`}>
                                    B.E. in Computer Engineering
                                </h2>
                            </header>
                        </div>
                    </div>
                    <InfoPanel bgColor={`bg-navy`}>
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
                    </InfoPanel>
                    <InfoPanel bgColor={`bg-orange`}>

                    </InfoPanel>
                </div>
            </div>
        );
    }
};

export default App;
