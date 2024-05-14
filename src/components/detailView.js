import React, { Component } from 'react';

class DetailView extends Component {
    render() { 
        return (
            <div>
                {this.props.episodes.map(i=>
                    <h3 key={i}>{i}</h3>
                )}
            </div>
        );
    }
}
 
export default DetailView;
// hey