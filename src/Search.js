import React from 'react'

const Search = ({handleStocked}) => {
    return (
        <div className="container">
            <form action="">
                <div className="row">
                    <div className="col s8">
                        <div className="input-field">
                            <input type="text" id="search" />
                            <label htmlFor="search">Search</label>
                        </div>
                    </div>
                    <div className="col s2"><button className="btn red">Serach</button></div>
                </div>
                <div className="input-field">
                    <input type="checkbox"/>
                    <span>Only Show products in stock</span>
                </div>
            </form>
        </div>
    )
}

export default Search
