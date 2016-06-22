import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      random: false,
      sparkleStatus: [true,false],
      active:[
        '#EA8576',
        '#40CCC0',
        '#FFD480',
        '#668B94'],
      clrs:{
        blue:['#75C0FA','#3EA8F9','#0A91F8','#75C0FA','#4F4FFA'],
        red:['#F56151','#DD948C','#AA726C','#DD5849','#DD5849'],
        green:['#00E44D','#00F252','#00C743','#00AE3B','#0DD04F'],
        yellow:['#FFEF00','#FFF779','#FFDF00','#FFEF00','#FFD300'],
      }
    };
    this.getRandomNum = this.getRandomNum.bind(this);
    this.changeRainbowColor = this.changeRainbowColor.bind(this);
    this.rotateColors = this.rotateColors.bind(this);
    this.stopRotate = this.stopRotate.bind(this);
    this.getSparkle = this.getSparkle.bind(this);
  }
  componentDidMount(req){
    console.log(req);
    if (req === true) {
      this.inc = setInterval(this.changeRainbowColor,1000);
    }
  }
  componentWillUnMount(){
    clearInterval(this.inc);
  }
  render() {
    return (
      <div>
        <button
          onClick={this.changeRainbowColor}
          style={btnStyle}
        >
         Change Color
        </button>
        <button
         onClick={this.rotateColors}
         style={btnStyle}
         >
          Auto On
         </button>
         <button
          onClick={this.stopRotate}
          style={btnStyle}
          >
           Auto Off
          </button>
        <div id='rainbowContainer'>
            <RainBow
              activeColors={this.state.active}
            />
            <div id="rainbow-fill"></div>
             <Diamond sparkle={this.getSparkle}/>
             <Clouds />
             <Shadows />
          </div>
        </div>
      )
  }
  getSparkle(){
    let active = Math.floor(Math.random() * ((1 - 0) - 0 + 1) + 0 );
    console.log('sparkle', active === 0 ? false : true);
    return active === 0 ? false : true;
  }
  rotateColors(){
      this.componentDidMount(true);
  }
  stopRotate(){
      this.componentWillUnMount();
  }
  getRandomNum(max){
    console.log(Math.floor(Math.random() * ((max - 1) - 0 + 1) + 0 ));
    return Math.floor(Math.random() * ((max - 1) - 0 + 1) + 0 );
  }
  changeRainbowColor(){
    let newColor = [];
    for(let i = 0; i < 4; i++){
      if(i === 0){newColor.push(this.state.clrs.blue[this.getRandomNum(3)])}
      if(i === 1){newColor.push(this.state.clrs.red[this.getRandomNum(3)])}
      if(i === 2){newColor.push(this.state.clrs.green[this.getRandomNum(3)])}
      if(i === 3){newColor.push(this.state.clrs.yellow[this.getRandomNum(3)])}
    }
    console.log(newColor);
    this.setState({active:newColor});
  }
}

class RainBow extends React.Component {
    render(){
      console.log(this.props.activeColors);
      return(
        <div id="rainbow">
          <div className="row" style={{borderColor:this.props.activeColors[0]}}>
           <div className="rowB " style={{borderColor:this.props.activeColors[1]}}>
             <div className="rowC " style={{borderColor:this.props.activeColors[2]}}>
              <div className="rowC " style={{borderColor:this.props.activeColors[3]}}>
               </div>
             </div>
           </div>
          </div>
        </div>
      )
    }
}

class Shadows extends React.Component {
 render(){
   return(
     <div className='shadows'>
       <div className='shadowLeft'></div>
       <div className='shadowRight'></div>
     </div>
   )
 }
}

class Clouds extends React.Component {
  render(){
    return(
      <div>
        <div id='cloud' className="cloudLeft">
        </div>
        <div id='cloud' className="cloudRight">
        </div>
      </div>
    )
  }
}

class Diamond extends React.Component{
  render(){
    console.log(this.props.sparkle());
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
