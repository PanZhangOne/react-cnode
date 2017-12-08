import React, {Component} from 'react';

class NumberComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{
        height: '40px',
        width: '40px',
        display: 'inline-flex',
        alignItems: 'center',
        fontSize: '15px',
        borderRadius: '50%',
        position: 'absolute',
        top: '8px',
        right: '4px',
        background: 'rgb(0, 188, 212)',
        color: '#fff',
        justifyContent: 'center'
      }}>{this.props.number}</div>
    )
  }
}

export default NumberComponent;
