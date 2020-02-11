import React from 'react';
import './App.css';
import InfoPanel from './components/InfoPanel/InfoPanel';

class App extends React.Component {
  render() {
      return (
          <body>
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
              <InfoPanel bgColor={`bg-navy`} cardTitle={`About me...`} cardType={`profile`}/>
              <InfoPanel bgColor={`bg-orange`} cardTitle={`Experience`} cardType={`list`}/>
          </body>
      );
  }
};

export default App;
