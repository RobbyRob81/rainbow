import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      random: false,
      active:['red','green','blue','yellow'],
      colors: [
      'Black',
      'Navy',
      'DarkBlue',
      'MediumBlue',
      'Blue',
      'DarkGreen',
      'Green',
      'Teal',
      'DarkCyan',
      'DeepSkyBlue',
      'DarkTurquoise',
      'MediumSpringGreen',
      'Lime',
      'SpringGreen',
      'Aqua',
      'Cyan',
      'MidnightBlue',
      'DodgerBlue',
      'LightSeaGreen',
      'ForestGreen',
      'SeaGreen',
      'DarkSlateGray',
      'LimeGreen',
      'MediumSeaGreen',
      'Turquoise',
      'RoyalBlue',
      'SteelBlue',
      'DarkSlateBlue',
      'MediumTurquoise',
      'Indigo',
      'DarkOliveGreen',
      'CadetBlue',
      'CornflowerBlue',
      'RebeccaPurple',
      'MediumAquaMarine',
      'DimGray',
      'SlateBlue',
      'OliveDrab',
      'SlateGray',
      'LightSlateGray',
      'MediumSlateBlue',
      'LawnGreen',
      'Chartreuse',
      'Aquamarine',
      'Maroon',
      'Purple',
      'Olive',
      'Gray',
      'SkyBlue',
      'LightSkyBlue',
      'BlueViolet',
      'DarkRed',
      'DarkMagenta',
      'SaddleBrown',
      'DarkSeaGreen',
      'LightGreen',
      'MediumPurple',
      'DarkViolet',
      'PaleGreen',
      'DarkOrchid',
      'YellowGreen',
      'Sienna',
      'Brown',
      'DarkGray',
      'LightBlue',
      'GreenYellow',
      'PaleTurquoise',
      'LightSteelBlue',
      'PowderBlue',
      'FireBrick',
      'DarkGoldenRod',
      'MediumOrchid',
      'RosyBrown',
      'DarkKhaki',
      'Silver',
      'MediumVioletRed',
      'IndianRed',
      'Peru',
      'Chocolate',
      'Tan',
      'LightGray',
      'Thistle',
      'Orchid',
      'GoldenRod',
      'PaleVioletRed',
      'Crimson',
      'Gainsboro',
      'Plum',
      'BurlyWood',
      'LightCyan',
      'Lavender',
      'DarkSalmon',
      'Violet',
      'PaleGoldenRod',
      'LightCoral',
      'Khaki',
      'AliceBlue',
      'HoneyDew',
      'Azure',
      'SandyBrown',
      'Wheat',
      'Beige',
      'WhiteSmoke',
      'MintCream',
      'GhostWhite',
      'Salmon',
      'AntiqueWhite',
      'Linen',
      'LightGoldenRodYellow',
      'OldLace',
      'Red',
      'Fuchsia',
      'Magenta',
      'DeepPink',
      'OrangeRed',
      'Tomato',
      'HotPink',
      'Coral',
      'DarkOrange',
      'LightSalmon',
      'Orange',
      'LightPink',
      'Pink',
      'Gold',
      'PeachPuff',
      'NavajoWhite',
      'Moccasin',
      'Bisque',
      'MistyRose',
      'BlanchedAlmond',
      'PapayaWhip',
      'LavenderBlush',
      'SeaShell',
      'Cornsilk',
      'LemonChiffon',
      'FloralWhite',
      'Snow',
      'Yellow',
      'LightYellow',
      'Ivory',
      'White',
    ]};
    this.getRandomNum = this.getRandomNum.bind(this);
    this.changeRainbowColor = this.changeRainbowColor.bind(this);
    this.rotateColors = this.rotateColors.bind(this);
    this.stopRotate = this.stopRotate.bind(this);
  }
  componentDidMount(){
    this.inc = setInterval(this.changeRainbowColor,500);
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
          Sprinkles On!
         </button>
         <button
          onClick={this.stopRotate}
          style={btnStyle}
          >
           Sprinkles Off
          </button>
        <div id='rainbowContainer'>
            <RainBow
              activeColors={this.state.active}
              color1 ={this.state.active[0]}
              color2 ={this.state.active[1]}
              color3 ={this.state.active[2]}
            />
            <div id="rainbow-fill"></div>
             <Clouds />
          </div>
        </div>
      )
  }
  rotateColors(){
      this.componentDidMount();
  }
  stopRotate(){
      this.componentWillUnMount();
  }
  getRandomNum(){
    return Math.floor(Math.random() * (this.state.colors.length - 0 + 1) + 0 );
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
        <div id='cloud' className="cloudLeft"></div>
        <div id='cloud' className="cloudRight"></div>
      </div>
    )
  }
}

let btnStyle = {
  border:'1px solid #5c91a2',
  color:'white',
  padding: '1rem',
  background:'none',
  fontSize:'1rem'
};

export default App;
