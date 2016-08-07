import React from 'react';

class Cloud extends React.Component {
  render(){
    const {className, children, style} = this.props;
    return (
      <div
        id='cloud'
        className={className}
        style={style}
      >
       {children}
      </div>
    )
  }
}

export default Cloud;



// element.style {
//     z-index: -1;
//     top: 276px;
//     opacity: 0.98;
//     left: -11px;
//     WIDTH: 400px;
//     height: 210px;
//     opacity: 0.2;
// }

// div#cloud:before {
//     width: 200px;
//     height: 200px;
//     top: -67px;
// }

// #cloud:after {
//     width: 214px;
//     height: 210px;
//     top: -49px;
//     left: 21px;
//     -webkit-border-radius: 100px;
//     -moz-border-radius: 100px;
//     box-shadow: -2px -13px 18px rgba(64, 64, 107, 0.05);
// }
