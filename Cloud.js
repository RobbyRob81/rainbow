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
