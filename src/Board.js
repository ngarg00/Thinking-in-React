import React, { Component } from 'react';
import Search from './Search';
export class Board extends Component {
    state = {
        goods: [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
          ]
    }
    render() {
        return (
            <div className="container">
                <h4 className="center">Stock</h4>
               <Search/>
            </div>
        )
    }
}

export default Board
