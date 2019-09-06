import React from 'react';
import { Cell } from '../cell/cell.js';

export class Gameboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      numberCount: 9,
      selectedCells: [],
      numberValues: [],
      rightOrder: [],
      items: [],
    }
  } // end of constructor
  
  init = () => {
    this.numberPlacement(this.state.numberCount);
    this.numberSelector(this.state.numberCount);
    this.numbersToCell();
    this.itemArrayCreator();
  }
    random = (factor) => Math.floor(Math.random() * factor);

    numberPlacement(numberCount) {
      console.log("selecting numbers")
      let selectedCells = this.state.selectedCells;
      for (let i = 0; i < numberCount; i++) {
        let pushMe = this.random(40)
        if (selectedCells.indexOf(pushMe) === -1) {
          selectedCells.push(pushMe)
        } else {
          i--;
        }
      }
      this.setState({selectedCells: selectedCells})
    }
    numberSelector(numberCount) {
      let numberValues = [];
      for (let i = 0; i < numberCount; i++) {
        let pushMe = this.random(9) + 1
        if (numberValues.indexOf(pushMe) === -1) {
          numberValues.push(pushMe)
        } else {
          i--;
        }
      }
      console.log(numberValues, "ASDAKDKJ:ASDJKASJKD")
      this.setState({numberValues: numberValues})
    }

    numbersToCell() {
      let rightOrder = [];
      let numberValues = this.state.numberValues.sort();
      for (let i = 0; i < this.state.selectedCells.length; i++) {
        rightOrder.push([this.state.selectedCells[i], numberValues[i]])
      }
      console.log(rightOrder)
      this.setState({rightOrder: rightOrder})
      console.log(this.state.numberValues, "ASDAKDKJ:ASDJKASJKD2222222")
    }

    itemArrayCreator() {
      let items = [];
      let j = 0;
      let rightOrder = this.state.rightOrder;
      for (let i = 0; i < 40; i++) {
        let jump = 0;
        for (let j = 0; j < rightOrder.length; j++) {
          if (rightOrder[j][0] === i) {
            items.push(<Cell id={rightOrder[j][0]} value={rightOrder[j][1]} />)
            jump++
          }
        }
        if (jump === 0) items.push(<Cell key={i} id={i} value={20} />)
        jump = 0;
      }
      this.setState({items: items})
    }

  render() {
    // this.init();
    return (
      <div>
      <div className='gameboard'>
        {this.state.items}
      </div>
      <h1 onClick={this.init}>PASKA:DD</h1>
      </div>
    )
  }
}