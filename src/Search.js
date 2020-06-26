import React from 'react'

const Search = () => {
    return (
        <div className="container">
            <form action="">
                <div className="row">
                    <div className="col s9">
                        <div className="input-field">
                            <input type="text" id="search" />
                            <label htmlFor="search">Search</label>
                        </div>
                        <div className="col s2">
                            <button className="btn green lighten-1">Search</button>        
                        </div>
                    </div>
                </div>
                <div className="input-field">
                    <input type="checkbox" />
                    <span>Only Show products in stock</span>
                </div>
            </form>
        </div>
    )
}

export default Search
