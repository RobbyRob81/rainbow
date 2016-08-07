import React from 'react';
import Cloud from './Cloud.js';
import Button from "./Button.js";
import Styles from "./Styles.js";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      random: false,
      sparkleStatus: [true,false],
      active:[
        '#3EA8F9',
        '#DD948C',
        '#00F252',
        '#FFF779']
    };
    this.getRandomNum = this.getRandomNum.bind(this);
    this.changeRainbowColor = this.changeRainbowColor.bind(this);
    this.rotateColors = this.rotateColors.bind(this);
    this.stopRotate = this.stopRotate.bind(this);
    this.getSparkle = this.getSparkle.bind(this);
  }
  componentWillUnMount(){
    clearInterval(this.inc);
    this.inc = '';
  }
  render() {
    console.log(this.inc);
    return (
      <div>
        <Button
          style={btnStyle}
          onClick={this.changeRainbowColor}
          text="Change Color"
        />
        <Button
          onClick={this.rotateColors}
          style={btnStyle}
          text="Auto On"
        />
        <Button
          onClick={this.stopRotate}
          style={btnStyle}
          text="Auto Off"
        />
        <div id='rainbowContainer'>
            <RainBow
              activeColors={this.state.active}
            />
            <div id="rainbow-fill"></div>
             <Diamond sparkle={this.getSparkle}/>

             <Cloud className="cloudLeft" />
               <div className="shadows">
               <div className='shadowLeft'></div>
               </div>

             <Cloud className="cloudRight" />
             <div className="shadows">
             <div className='shadowRight'></div>
             </div>

          </div>
        </div>
      )
  }
  getSparkle(){
    let active = Math.floor(Math.random() * ((1 - 0) - 0 + 1) + 0 );
    return active === 0 ? false : true;
  }
  rotateColors(){
    const {random} = this.state;
      return random === false ? this.inc = setInterval(this.changeRainbowColor,100) : this.stopRotate();
  }
  stopRotate(){
    clearInterval(this.inc);
      // this.componentWillUnMount();
  }
  getRandomNum(max){
    return Math.floor(Math.random() * ((max - 1) - 0 + 1) + 0 );
  }
  changeRainbowColor(){
    const {blue, red, green, yellow} = Styles.clrs;
    const newColor = [];
    for(let i = 0; i < 4; i++){
      if(i === 0){newColor.push(blue[this.getRandomNum(3)])}
      if(i === 1){newColor.push(red[this.getRandomNum(3)])}
      if(i === 2){newColor.push(green[this.getRandomNum(3)])}
      if(i === 3){newColor.push(yellow[this.getRandomNum(3)])}
    }
    this.setState({active:newColor});
  }
}

class RainBow extends React.Component {
    render(){
      const {activeColors} = this.props;
      return(
        <div id="rainbow">
          <div className="row" style={{borderColor:activeColors[3]}}>
           <div className="rowB " style={{borderColor:activeColors[2]}}>
             <div className="rowC " style={{borderColor:activeColors[1]}}>
              <div className="rowC " style={{borderColor:activeColors[0]}}>
               </div>
             </div>
           </div>
          </div>
        </div>
      )
    }
}

class Diamond extends React.Component{
  render(){
    return (
      <div>
        <div className='diamonds-left'>
          <div className='diamond shine'></div>
          <div className='diamond shine'></div>
          <div className='diamond shine'></div>
        </div>
        <div className='diamonds-right'>
          <div className='diamond shine'></div>
          <div className='diamond shine'></div>
          <div className='diamond shine'></div>
        </div>
      </div>
     )
  }
 }

let btnStyle = {
  border:'2px solid rgba(102, 139, 148, 0.29)',
  color:'#668b94',
  padding: '1rem',
  background:'none',
  fontSize:'1rem',
  margin:3,
  borderRadius:4,
};

export default App;
