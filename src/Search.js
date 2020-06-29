import React from 'react'

const Search = ({ handleStocked, handleSearch }) => {
    let value = null;
    const handleSubmit = (e)=>{
        e.preventDefault();
        handleSearch(value);
    }

    const handleChange = (e)=>{
        value = e.target.value;
        handleSearch(value);
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col s8">
                        <div className="input-field">
                            <input type="text" id="search" onChange={handleChange}/>
                            <label htmlFor="search">Search</label>
                        </div>
                    </div>
                    <div className="col s2"><button className="btn red">Serach</button></div>
                </div>
                <div className="input-field">
                    <p>
                        <label>
                            <input type="checkbox" onClick={handleStocked}/>
                            <span>Only Show products in stock</span>
                        </label>
                    </p>
                </div>
            </form>
        </div>
    )
}

export default Search
