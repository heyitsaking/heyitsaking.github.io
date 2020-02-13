import React from 'react';
import './App.css';
import InfoPanel from './components/InfoPanel/InfoPanel';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            route: 'main'
        }
    }

    onClick = () => {
        console.log('Route changed')
        this.setState({route: 'cardi'});
    };

    render() {
        const { route } = this.state;
        return (
            <div>
                <div className={(route === 'main') ? 'dn' : 'cardiInfo db bg-black-30 h-100 w-100 flex items-center justify-center'}>
                    <div className={`h-50-ns h-auto w-75 bg-white overflow-hidden flex flex-column`}>
                        <div className={`outline h2 flex flex-row-reverse`}>
                            <button className={``}>X</button>
                        </div>
                        <div className={`outline h-inherited ma2 flex flex-auto flex-row-ns flex-column`}>
                            <p className={`f3 w9 w-75`}>
                                Nib info
                            </p>
                            <img src={require('./nib.jpg')}
                                 alt={`Cardi`}
                                 className={`mw5-ns`}
                            />
                        </div>
                    </div>
                </div>
                <div className={`base`}>
                    <div>
                      <div class={`jumbotron`}>
                          <div class={`sheet bg-black o-40`}></div>
                          <div class={`main-text`}>
                              <header class={`resize tc flex flex-column justify-center items-center`}>
                                  <h1 class={`f-5-ns f1 ttu fw9 white-90 mv3`}>
                                      Arturo A. King
                                  </h1>
                                  <h2 class={`f-1-ns f2 fw3 white-80 mt0 lh-copy`}>
                                      B.S. in Computer Engineering
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
