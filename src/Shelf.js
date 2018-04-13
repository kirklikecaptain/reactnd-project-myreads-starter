import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {

	render() {
		return (
			<ol className='books-grid'>
				{this.props.books.map((book) => (
					<li key={ book.id }>
						<Book
							book={ book }
							books={ this.props.books }
							changeShelf={ this.props.changeShelf }
						/>
					</li>
				))}
			</ol>
		)
	}
}

export default Shelf
