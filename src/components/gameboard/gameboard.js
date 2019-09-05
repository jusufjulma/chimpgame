import React from 'react';
import { Cell } from '../cell/cell.js';

export class Gameboard extends React.Component {
  render() {

    let random = (factor) => Math.floor(Math.random() * factor)

    let numberCount = 3;
    let selectedCells = [];
    let numberValues = [];

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
    console.log(selectedCells, numberValues)

    let items = [];
    let j = 0;
    for (let i = 0; i < 40; i++) {
      if (selectedCells.indexOf(i) !== -1) {
        items.push(<Cell id={i} value={numberValues[j]} />)
        j++;
      } else {
        items.push(<Cell id={i} value={0} />)
      }
    }


    return (
      <div className='gameboard'>
        {items}
      </div>
    )
  }
}