import React from 'react';

export class Options extends React.Component{
    render() {

        return (
            <div className='options'>
                <div className='instructions'>
                    <p>You can see the instructions and ruleset from here</p>
                </div>
                <div className='difficulty'>
                    <p>Switch difficulty level here</p>
                </div>
            </div>
        )
    }
}