import React from 'react'
import Books from './Books'

function BookShelf({shelfTitle,currentBooks,handleSelect,shelf}) {
    return (
        <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
            <ol className="books-grid">
                {/* {currentBooks.filter(({shelf}) => shelf === 'currentlyReading')
                             .map(({id,title,authors,imageLinks,shelf}) => (
                                <li key={id}>
                                    <div className="book">
                                    <div className="book-top">
                                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks?.thumbnail})` }}></div>
                                        <div className="book-shelf-changer">
                                        <select onChange={e => this.handleSelect(e,id)} value={shelf}>
                                            <option value="move" disabled>Move to...</option>
                                            <option value="" hidden></option>
                                            <option value="currentlyReading">Currently Reading</option>
                                            <option value="wantToRead">Want to Read</option>
                                            <option value="read">Read</option>
                                            <option value="none">None</option>
                                        </select>
                                        </div>
                                    </div>
                                    <div className="book-title">{title}</div>
                                    <div className="book-authors">{authors?.[0] || 'UnKnown Author'}</div>
                                    </div>
                                </li>
                            ))
                } */}
                <Books items={currentBooks} handleSelect={handleSelect} shelf={shelf} />
            </ol>
        </div>
        </div>
    )
}

export default BookShelf