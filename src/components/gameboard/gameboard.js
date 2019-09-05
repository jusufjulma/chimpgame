import React from 'react';
import { Cell } from '../cell/cell.js';

export class Gameboard extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      clickThis: '',
    }
  } // end of constructor

  render() {

    let random = (factor) => Math.floor(Math.random() * factor)

    let numberCount = 3;
    let selectedCells = [];
    let numberValues = [];
    let rightOrder = [];

    function numberPlacement(numberCount) {
      for (let i = 0; i < numberCount; i++) {
        let pushMe = random(40)
        if (selectedCells.indexOf(pushMe) === -1) {
          selectedCells.push(pushMe)
        } else {
          i--;
        }
      }
    }
    function numberSelector(numberCount) {
      for (let i = 0; i < numberCount; i++) {
        let pushMe = random(9) + 1
        if (numberValues.indexOf(pushMe) === -1) {
          numberValues.push(pushMe)
        } else {
          i--;
        }
      }
    }
    numberPlacement(numberCount);
    numberSelector(numberCount);
    console.log(selectedCells +'\n'+ numberValues)
    numbersToCell();

    function numbersToCell() {
      numberValues = numberValues.sort();
      for (let i = 0; i < selectedCells.length; i++) {
        rightOrder.push([selectedCells[i], numberValues[i]])
      }
      console.log(rightOrder)
    }

    let items = [];
    itemArrayCreator();
    function itemArrayCreator() {
      let j = 0;
      console.log(rightOrder[j][0], 'asdasd')
      for (let i = 0; i < 40; i++) {
        let jump = 0;
        for (let j = 0; j < rightOrder.length; j++) {
          if (rightOrder[j][0] === i) {
            items.push(<Cell id={rightOrder[j][0]} value={rightOrder[j][1]} />)
            jump++
          }
        }
        if (jump === 0) items.push(<Cell id={i} value={20} />)
        jump = 0;
      }
    }

    let clickFirst = () => {
      this.setState({clickThis: rightOrder[0][0]})
    }


    return (
      <div>
      <div className='gameboard'>
        {items}
      </div>
        <h1 onClick={clickFirst}>Which should I click first? {this.state.clickThis}</h1>
      </div>
    )
  }
}