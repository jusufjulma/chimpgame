import React from 'react';
import {Cell} from '../cell/cell.js';

export class Gameboard extends React.Component{
    render() {

        let items = [];
        for (let i = 0; i < 20; i++) {
            if (i % 4 == 0) {
                items.push(<Cell active={'active'} />)
            } else {
                items.push(<Cell />)
            }
        }
        return (
            <div className='gameboard'>
                {items}
            </div>
        )
    }
}