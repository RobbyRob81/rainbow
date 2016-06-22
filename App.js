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
    ]};
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
              color1 ={this.state.active[0]}
              color2 ={this.state.active[1]}
              color3 ={this.state.active[2]}
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
  getRandomNum(){
    return Math.floor(Math.random() * ((this.state.colors.length - 1) - 0 + 1) + 0 );
  }
  changeRainbowColor(){
    let newColor = [];
    for(var i = 0; i < this.state.active.length; i++){
      newColor.push(this.state.colors[this.getRandomNum()]);
    }
    console.log(newColor);
    this.setState({active:newColor});
  }
}

class RainBow extends React.Component {
    render(){
      return(
        <div id="rainbow">
          <div className="row" style={{background:this.props.color1}}>
           <div className="rowB " style={{background:this.props.color2}}>
             <div className="rowC " style={{background:this.props.color3}}>
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
