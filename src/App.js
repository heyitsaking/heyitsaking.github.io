import React from 'react';
import './App.css';
import InfoPanel from './components/InfoPanel/InfoPanel';
import NibDisplay from './components/NibDisplay/NibDisplay';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            route: 'main'
        }
    }

    onClick = () => {
        if(this.state.route == 'main') {
            this.setState({route: 'cardi'});
        } else {
            this.setState({route: 'main'});
        }
    };

    render() {
        const { route } = this.state;
        return (
            <div>
                <div className={(route === 'main') ? 'dn' : 'cardiInfo db bg-black-30 h-100 w-100 flex items-center justify-center'}>
                    <NibDisplay onClick={this.onClick}/>
                </div>
                <div className={`base`}>
                    <div>
                      <div class={`jumbotron`}>
                          <div class={`sheet bg-black-50`}></div>
                          <div class={`main-text`}>
                              <header class={`resize tc flex flex-column justify-center items-center`}>
                                  <h1 class={`f-5-ns f1 ttu fw9 white-90 mv3`}>
                                      Arturo A. King
                                  </h1>
                                  <h2 class={`f-1-ns f2 fw4 white-80 mt0 lh-copy`}>
                                      B.E. in Computer Engineering
                                  </h2>
                              </header>
                          </div>
                      </div>
                      <InfoPanel bgColor={`bg-navy`} cardType={`profile`} onLinkClick={this.onClick}/>
                      <InfoPanel bgColor={`bg-orange`} cardTitle={`Experience`} cardType={`list`}/>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;
