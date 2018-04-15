import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'

import Book from './Book'

class Search extends Component {
	state = {
		query: '',
		searchResults: [],
		searchError: false
	}

	updateQuery = (queryTerm) => {
		this.setState(() => ({
			query: queryTerm
		}))
	}

	clearQuery = () => {
		this.updateQuery('')
	}

	bookSearch = () => {
		if (this.state.query.length > 0) {
			BooksAPI.search(this.state.query)
			.then((newBooks) => (
				newBooks.length > 0
				? this.setState(() => ({	searchResults: newBooks, searchError: false }))
				: this.setState(() => ({	searchResults: [], searchError: true	}))
			))
		}
	}

	render() {

		return (
			<div className="search-books">
				<div className="search-books-bar">
					<Link className="close-search" to='/'>Close</Link>
					<div className="search-books-input-wrapper">
						<input
							type="text"
							placeholder="Find a new book by title or author"
							value={this.state.query}
							onChange={(event) => {
								this.updateQuery(event.target.value)
								this.bookSearch()
							}}
							/>
					</div>
				</div>
				<div className="search-books-results">
					<ol className="books-grid">
						{this.state.searchResults.map((book) => (
							<li key={ book.id }>
								<Book
									book={ book }
									books={ this.props.books }
									changeShelf={ this.props.changeShelf }
								/>
							</li>
						))}
						{this.state.searchError === true && (
							<div>Woops, no results were found!</div>
						)}
					</ol>
				</div>
			</div>
		)
	}
}

export default Search
