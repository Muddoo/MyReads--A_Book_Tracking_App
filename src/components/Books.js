import React from 'react'

function Books({items,handleSelect,shelf}) {
    const books = shelf ? items.filter(item => item.shelf === shelf) : items;
    return (
        <>
            {books.map(({id,title,authors,imageLinks,shelf}) => (
                <li key={id}>
                    <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks? imageLinks.thumbnail : 'https://via.placeholder.com/128x193.gif/000/fff?text=Sorry+No+Image+For+This+Book'})` }}></div>
                        <div className="book-shelf-changer">
                        <select onChange={e => handleSelect(e,id)} value={shelf}>
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
            )) }
        </>
    )
}

export default Books;