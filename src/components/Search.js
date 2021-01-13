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
                {/* {searchedBooks.map(({id,title,authors,imageLinks,shelf}) => (
                    <li key={id}>
                        <div className="book">
                        <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks? imageLinks.thumbnail : 'https://via.placeholder.com/128x193.gif/000/fff?text=Sorry+No+Image+For+This+Book'})` }}></div>
                            <div className="book-shelf-changer">
                            <select onChange={e => this.handleSelect(e,id)} value={shelf}>
                                <option value="move" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                                <option value="none">None</option>
                            </select>
                            </div>
                        </div>
                        <div className="book-title">{title}</div>
                        <div className="book-authors">{authors ? authors.join(' / ') : 'UnKnown Author'}</div>
                        </div>
                    </li>
                )) } */}
                <Books items={searchedBooks} handleSelect={handleSelect}/>
            </ol>
            </div>
        </div>
    )
}

export default Search