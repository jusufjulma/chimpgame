import React from 'react';

export class Cell extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: this.props.id,
      number: this.props.value,
    }
  } // end of constructor

  render() {

    // let active = this.props.active;
    let display = this.state.number
    if (display === 20) display = ''
    return (
      // <div className={`cell ${active}`}>
      <div className='cell' id={`cell${this.state.id}`}>
        {display}
      </div>
    )
  }
}