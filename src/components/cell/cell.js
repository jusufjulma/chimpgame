import React from 'react';

export class Cell extends React.Component{
    render() {

        let active = this.props.active;
        return (
            <div className={`cell ${active}`}>
                {this.props.number}
            </div>
        )
    }
}