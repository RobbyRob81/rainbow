import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {colors:['blue','green','red','yellow']};
    this.changeColors = this.changeColors.bind(this);
  }
  render() {
    return (
      <div>
      <button onClick={this.changeColors}/>
        <div id='rainbowContainer'>
            <RainBow colors={this.state.colors}/>
            <div id="rainbow-fill"></div>
             <Clouds />
          </div>
        </div>
      )
  }
  changeColors(e){
    let newColors = {colors:['yellow','red','blue','green']};
    let defaultColors = {colors:['blue','green','red','yellow']};
    console.log('state', this.state);
    console.log('new', newColors);

  }
}

const Button = (props) => <button>
                           Change Colors
                          </button>


class RainBow extends React.Component {
    render(){
      return(
        <div id="rainbow">
          <div className="row">
           <div className="rowB">
             <div className="rowC">
               <div className="insideRow"></div>
             </div>
           </div>
          </div>
        </div>
      )
    }
}

class Clouds extends React.Component {
  render(){
    return(
      <div>
        <div id='cloud' className="cloudLeft"></div>
        <div id='cloud' className="cloudRight"></div>
      </div>
    )
  }
}


export default App;
