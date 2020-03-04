import React, { Component } from 'react'

export default class MenuItem extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.item.name}</h2> 
            </div>
        )
    }
}
