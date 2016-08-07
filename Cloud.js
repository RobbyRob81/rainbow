import React from 'react';

class Cloud extends React.Component {
  render(){
    const {className, children} = this.props;
    return <div id='cloud' className={className}>{children}</div>
  }
}

export default Cloud;
