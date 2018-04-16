import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'
import noCover from './icons/no-cover.svg'

class Book extends Component {

	render() {

		const { book, books, changeShelf } = this.props
		const coverCheck = book.imageLinks && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : noCover

		return (
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${coverCheck})` }}></div>
						<ShelfChanger
							book={ book }
							books={ books }
							changeShelf={ changeShelf }
							/>
					</div>
					<div className="book-title">{book.title}</div>
					{	//handle unknown authors
						book.authors
						?	book.authors.map((author, index) => (<div className='book-authors' key={ index }>{ author }</div>))
						: <div className='book-authors'>Author Unknown</div>
					}
				</div>
		)
	}
}

export default Book
