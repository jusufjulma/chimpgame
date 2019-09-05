import React from 'react';
import { Cell } from '../cell/cell.js';

export class Gameboard extends React.Component {
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
        for (let j = 0; j < rightOrder.length; j++) {
          if (rightOrder[j][0] === i) {
            items.push(<Cell id={rightOrder[j][0]} value={rightOrder[j][1]} />)
            i++ 
          }
        }
        items.push(<Cell id={i} value={20} />)
      }
    }


    return (
      <div className='gameboard'>
        {items}
      </div>
    )
  }
}