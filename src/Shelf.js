import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {

	render() {
		const { books, changeShelf } = this.props
		return (
			<ol className='books-grid'>
				{books.map((book) => (
					<li key={ book.id }>
						<Book
							book={ book }
							books={ books }
							changeShelf={ changeShelf }
						/>
					</li>
				))}
			</ol>
		)
	}
}

export default Shelf
