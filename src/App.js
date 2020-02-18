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
                    <div className="dt center pv1-m pv1-ns ph0-ns ph2 bg-white mw8-l w-80 ba b--orange bw2">
                        <div className={`flex flex-row-reverse pt1 pr1 h2`}>
                            <button className={`bg-transparent f5`}>X</button>
                        </div>
                        <div className={`pr1-ns`}>
                            <div className="db dtc-ns v-mid-ns pl1-ns pa1">
                                <img src={require(`./nib.jpg`)} alt="A bright blue sky"
                                     className="w-100 mw7 w5-ns"/>
                            </div>
                            <div className="db dtc-ns v-mid ph2 pr2-ns pl1-ns">
                                <p className="lh-copy tj navy avenir f7-m">
                                    {`This is Cardi. We initially fostered her and her two siblings, Nicki and Chance (the
                                    Humane Society likes naming their litters with a theme), when they were two weeks
                                    old. Sadly, Nicki and Chance were already sick when we began fostering and passed
                                    away :( We then decided to adopt Cardi, and while we don't really call her by that
                                    name, we decided to keep it in memory of her siblings.`}
                                </p>
                                Follow her adventures on Instagram! <a href={`https://www.instagram.com/cardic_calico/?igshid=h7riz1jen7v6`}>@cardic_calico</a>
                            </div>
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
