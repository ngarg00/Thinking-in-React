import React, { Component } from 'react';
import Search from './Search';
import ElectronicGoods from './ElectronicGoods';
import SportingGoods from './SportingGoods'
export class Board extends Component {
    state = {
        goods: [
            {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
            {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
            {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
            {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
            {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
            {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"}
          ],
        showOnlyStocked: false,
        searchedValue : null
    }

    handleSearch = (searchedValue) => {
        this.setState({
            searchedValue: searchedValue
        })
    }

    handleStocked = ()=>{
        this.setState({
            showOnlyStocked : !this.state.showOnlyStocked
        })
    }
    render() {
        return (
            <div className="container">
                <h4 className="center">Stock</h4>
                <Search handleSearch={this.handleSearch} handleStocked={this.handleStocked}/>
                <ElectronicGoods searchedValue={this.state.searchedValue} showOnlyStocked={this.state.showOnlyStocked} goods={this.state.goods}/>
                <SportingGoods searchedValue={this.state.searchedValue} showOnlyStocked={this.state.showOnlyStocked} goods={this.state.goods}/>
            </div>
        )
    }
}

export default Board
