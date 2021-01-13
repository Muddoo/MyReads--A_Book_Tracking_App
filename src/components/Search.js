import React from 'react'
import Books from './Books'
import { Link } from "react-router-dom"

function Search({onShelfChange,value,searchedBooks,handleSelect}) {
    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={onShelfChange} value={value} autoFocus/>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    <Books items={searchedBooks} handleSelect={handleSelect}/>
                </ol>
            </div>
        </div>
    )
}

export default Search