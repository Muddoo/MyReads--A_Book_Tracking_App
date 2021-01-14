import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { HashRouter, Route } from "react-router-dom";
import Search from './components/Search'
import Home from './components/Home'

class BooksApp extends React.Component {
  state = {
      value: '',
      timeout: null,
      searchedBooks: [],
      currentBooks: [],
  }

  async componentDidMount() {
    const currentBooks = await BooksAPI.getAll();
    this.setState({currentBooks});
  }

  debounce = (fn,delay) => {
      return (e) => {
          e.persist();
          this.setState({value: e.target.value}); 
          clearTimeout(this.state.timeout);
          const timeout = setTimeout(() => fn(e),delay)
          this.setState({timeout});
      }
  }

  handleChange = async (e) => {
    const currentBooks = this.state.currentBooks;
    let   searchedBooks = e.target.value ? await BooksAPI.search(this.state.value) : [];
          searchedBooks = searchedBooks.error ? [] : searchedBooks;
          searchedBooks = searchedBooks.map(book => currentBooks.find(({id,shelf}) => id === book.id && {...book,shelf}) || {...book,shelf:'none'} );
    this.setState({searchedBooks});
  }

  handleSelect = async (e,id) => {
      await BooksAPI.update(id, e.target.value);
      const currentBooks = await BooksAPI.getAll();
      const searchedBooks = this.state.searchedBooks.map(book => currentBooks.find(({id,shelf}) => id === book.id && {...book,shelf}) || {...book,shelf:'none'} );
      this.setState({searchedBooks,currentBooks});
  }  

  render() {
    const {value,searchedBooks,currentBooks} = this.state;
    const debounced = this.debounce(this.handleChange,200);

    return (
      <HashRouter>
      <div className="app">
        <Route path="/search" render={props => 
            <Search {...props} 
                onShelfChange={debounced} 
                value={value} 
                searchedBooks={searchedBooks} 
                handleSelect={this.handleSelect} 
            />} 
        />

        <Route exact path="/" render={props => 
            <Home {...props} 
                currentBooks={currentBooks} 
                handleSelect={this.handleSelect} 
            />}
        />
      </div>
      </HashRouter>
    )
  }
}

export default BooksApp