import React from 'react'
import Books from './Books'

function BookShelf({shelfTitle,currentBooks,handleSelect,shelf}) {
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    <Books items={currentBooks} handleSelect={handleSelect} shelf={shelf} />
                </ol>
            </div>
        </div>
    )
}

export default BookShelf