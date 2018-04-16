import React, { Component } from 'react'
import Shelf from './Shelf'

class BookCase extends Component {

	render() {
		const shelfTypes = [{ type: 'currentlyReading', title: 'Currently Reading' },
												{ type: 'wantToRead',  title: 'Want to Read' },
												{ type: 'read', title: 'Read'}]

		const { books, changeShelf } = this.props

		return (

				<div className="list-books-content">
					{shelfTypes.map( shelf => {
						const placeBooks = books.filter( book => book.shelf === shelf.type )
						return (
							<div className="bookshelf" key={ shelf.type }>
	              <h2 className="bookshelf-title">{ shelf.title }</h2>
	              <div className="bookshelf-books">
	              	<Shelf
										books={ placeBooks }
										changeShelf={ changeShelf }
									/>
              	</div>
							</div>
						)
					})}
				</div>
		)
	}
}

export default BookCase
