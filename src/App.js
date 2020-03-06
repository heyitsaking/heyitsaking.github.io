import React from 'react';
import './App.css';
import InfoPanel from './components/InfoPanel/InfoPanel';
import NibDisplay from './components/NibDisplay/NibDisplay';
import ProfilePanel from "./components/ProfilePanel/ProfilePanel";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            route: 'main'
        }
    }

    onClick = () => {
        if(this.state.route === 'main') {
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
                          <div class={`main-text bg-black-40`}>
                              <header class={`resize tc flex flex-column justify-center items-center`}>
                                  <h1 class={`f1-ns f2 ttu fw9 white-90 mv3`}>
                                      Arturo A. King
                                  </h1>
                                  <h2 class={`f2-ns f3 fw7 white-90 mt0 lh-copy`}>
                                      B.E. in Computer Engineering
                                  </h2>
                              </header>
                          </div>
                      </div>
                      <ProfilePanel bgColor={`bg-navy`} onLinkClick={this.onClick}/>
                      <InfoPanel bgColor={`bg-orange`} cardTitle={`Experience`}/>
                    </div>
                </div>
            </div>
        );
    }
};

export default App;
