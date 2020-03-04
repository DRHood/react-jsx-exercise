import React, { Component } from 'react'
import menuData from '../pizzaData'
import MenuItem from './MenuItem'

export default class Menu extends Component {
    render() {
        const menuItems = menuData
        return (
            <div>
                <h1>Menu</h1>
                {menuItems.map((item, i) => {
                    return <MenuItem items={item} key={i}/>
                })}
            </div>
        )
    }
}
