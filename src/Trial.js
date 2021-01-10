import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { BrowserRouter, Route, Link } from "react-router-dom";

class BooksApp extends React.Component {
  state = {
      original: [],
      searchedBooks: [],
      currentBooks: []
  }

  async componentDidMount() {
    const currentBooks = await BooksAPI.getAll();
    this.setState({currentBooks});
  }

  handleChange = async (e) => {
    const currentBooksIds = this.state.currentBooks.map(book => book.id);
    let   original = e.target.value ? await BooksAPI.search(e.target.value) : [];
          original = original.error ? [] : original;
    const searchedBooks = original.filter(({id}) => !currentBooksIds.includes(id));
    this.setState({original,searchedBooks});
  }

  handleSelect = async (e,{id}) => {
      await BooksAPI.update(id, e.target.value);
      const currentBooks = await BooksAPI.getAll();
      const currentBooksIds = currentBooks.map(book => book.id);
      const searchedBooks = this.state.original.filter(({id}) => !currentBooksIds.includes(id));
      this.setState({searchedBooks,currentBooks});
  }  

  render() {
    const {value,searchedBooks,currentBooks} = this.state;
    return (
      <BrowserRouter>
      <div className="app">
        <Route path="/search" render={() => (
            <div className="search-books">
                <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author" onChange={this.handleChange} autoFocus/>
                </div>
                </div>
                <div className="search-books-results">
                <ol className="books-grid">
                    {searchedBooks.map(({id,title,authors,imageLinks}) => (
                        <li key={id}>
                            <div className="book">
                            <div className="book-top">
                                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks?.thumbnail})` }}></div>
                                <div className="book-shelf-changer">
                                <select onChange={e => this.handleSelect(e,{id,title,authors,imageLinks})}>
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
                    )) }
                </ol>
                </div>
            </div>
          )} 
        />
        <Route exact path="/" render={() => (
            <div className="list-books">
                <div className="list-books-title">
                <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {currentBooks.filter(({shelf}) => shelf === 'currentlyReading')
                                         .map(({id,title,authors,imageLinks}) => (
                                            <li key={id}>
                                                <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks?.thumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                    <select onChange={e => this.handleSelect(e,{id,title,authors,imageLinks})}>
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
                            }
                        </ol>
                    </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {currentBooks.filter(({shelf}) => shelf === 'wantToRead')
                                         .map(({id,title,authors,imageLinks}) => (
                                            <li key={id}>
                                                <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks?.thumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                    <select onChange={e => this.handleSelect(e,{id,title,authors,imageLinks})}>
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
                            }
                        </ol>
                    </div>
                    </div>
                    <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                        <ol className="books-grid">
                            {currentBooks.filter(({shelf}) => shelf === 'read')
                                         .map(({id,title,authors,imageLinks}) => (
                                            <li key={id}>
                                                <div className="book">
                                                <div className="book-top">
                                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks?.thumbnail})` }}></div>
                                                    <div className="book-shelf-changer">
                                                    <select onChange={e => this.handleSelect(e,{id,title,authors,imageLinks})}>
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
                            }
                        </ol>
                    </div>
                    </div>
                </div>
                </div>
                <div className="open-search">
                <Link to="/search" className="button">Add a book</Link>
                </div>
            </div>
            )}
        />
      </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp
