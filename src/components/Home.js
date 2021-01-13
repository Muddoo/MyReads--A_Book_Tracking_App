import React from 'react'
import Header from './Header'
import BookShelf from './BookShelf';
import { Link } from "react-router-dom"

function Home({currentBooks,handleSelect}) {
    const shelves = [['Currently Reading', 'currentlyReading'],['Want to Read', 'wantToRead'],['Read', 'read']];
    return (
        <div className="list-books">
            <Header title='MyReads' />
            <div className="list-books-content">
                {shelves.map(([shelfTitle,shelf]) => 
                    <BookShelf key={shelf}
                        shelfTitle={shelfTitle} 
                        currentBooks={currentBooks} 
                        handleSelect={handleSelect} 
                        shelf={shelf} 
                    />
                )}
            </div>
            <div className="open-search">
            <Link to="/search" className="button">Add a book</Link>
            </div>
        </div>
    )
}

export default Home