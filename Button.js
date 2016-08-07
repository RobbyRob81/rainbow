import React from "react";

class Button extends React.Component {
  render(){
    const {style, onClick, text} = this.props;
    return(
      <button style={style} onClick={onClick}>{text}</button>
    )
  }
}

export default Button;
