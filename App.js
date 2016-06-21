import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div id='rainbowContainer'>
            <div id="rainbow">
              <div className="row">
               <div className="rowB">
                 <div className="rowC">
                   <div className="insideRow"></div>
                 </div>
               </div>
              </div>
            </div>
            <div id="rainbow-fill"></div>
            <div id='cloud' className="cloudLeft"></div>
            <div id='cloud' className="cloudRight"></div>
          </div>
        </div>
      )
  }
}

export default App;
