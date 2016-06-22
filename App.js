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
      colors:[
        '#EA8576',
        '#40CCC0',
        '#FFD480',
        '#668B94',
        '#83B8B7',
        '#E0DFE4',
        '#ECD794'
      ],
      clrs:{
        blue:['#75C0FA','#3EA8F9','#0A91F8','#75C0FA','#4F4FFA'],
        red:['#F56151','#DD948C','#AA726C','#DD5849','#DD5849'],
        green:['#391951','#662D91','#0C0511','#6F319E','#542577'],
        yellow:['#FCEE6D','#EEDB29','#C9B600','#FFF9BC','#FFF9BC'],
      }
    };
    this.getRandomNum = this.getRandomNum.bind(this);
    this.changeRainbowColor = this.changeRainbowColor.bind(this);
    this.rotateColors = this.rotateColors.bind(this);
    this.stopRotate = this.stopRotate.bind(this);
    this.getSparkle = this.getSparkle.bind(this);
  }
  componentDidMount(){
    this.inc = setInterval(this.changeRainbowColor,500);
    this.fade = setInterval(this.getSparkle, 500);
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
          On
         </button>
         <button
          onClick={this.stopRotate}
          style={btnStyle}
          >
           Off
          </button>
        <div id='rainbowContainer'>
            <RainBow
              activeColors={this.state.active}
            />
            <div id="rainbow-fill"></div>
             <Diamond sparkle={this.getSparkle}/>
             <Clouds />
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
      this.componentDidMount();
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
    for(let i = 0; i < 3; i++){
      if(i === 0){newColor.push(this.state.clrs.blue[this.getRandomNum(3)])}
      if(i === 1){newColor.push(this.state.clrs.red[this.getRandomNum(2)])}
      if(i === 2){newColor.push(this.state.clrs.yellow[this.getRandomNum(3)])}
      // if(i === num){newColor.push(this.state.clrs.red[3])}
      // newColor.push(this.state.colors[this.getRandomNum(this.state.colors.length)]);
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
          <div className="row" style={{background:this.props.activeColors[0]}}>
           <div className="rowB " style={{background:this.props.activeColors[1]}}>
             <div className="rowC " style={{background:this.props.activeColors[2]}}>
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
          <div className='diamond' disabled='false'></div>
          <div className='diamond' disabled='false'></div>
          <div className='diamond' disabled='false'></div>
        </div>
        <div className='diamonds-right'>
          <div className='diamond' disabled='false'></div>
          <div className='diamond' disabled='false'></div>
          <div className='diamond' disabled='false'></div>
        </div>
      </div>
     )
  }
 }

let btnStyle = {
  border:'1px solid #668b94',
  color:'#668b94',
  padding: '1rem',
  background:'none',
  fontSize:'1rem',
  margin:3,
  borderRadius:4,
};

export default App;
