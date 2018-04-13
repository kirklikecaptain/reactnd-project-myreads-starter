import React, { Component } from 'react'
import Shelf from './Shelf'

class BookCase extends Component {
	state = {

	}

	render() {
		const shelfTypes = [{ type: 'currentlyReading', title: 'Currently Reading' },
												{ type: 'wantToRead',  title: 'Want to Read' },
												{ type: 'read', title: 'Read'}]

		return (
			<div className="list-books">
				<div className="list-books-title">
					<h1>My Books</h1>
				</div>

				<div className="list-books-content">
					{shelfTypes.map( shelf => {
						const placeBooks = this.props.books.filter( book => book.shelf === shelf.type )
						return (
							<div className="bookshelf" key={ shelf.type }>
	              <h2 className="bookshelf-title">{ shelf.title }</h2>
	              <div className="bookshelf-books">
	              	<Shelf
										books={ placeBooks }
										changeShelf={ this.props.changeShelf }
									/>
              	</div>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

export default BookCase
