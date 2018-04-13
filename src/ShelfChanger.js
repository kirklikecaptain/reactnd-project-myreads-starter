import React, { Component } from 'react'

class ShelfChanger extends Component {

	render() {

		//establish default value for new books
		let currentShelf = 'currentlyReading'

		//loop through books array for a match, if it's in the array, update dropdown to approprate option
		for (let item of this.props.books) {
			if (item.id === this.props.book.id)  {
				currentShelf = item.shelf
				break
			}
		}



		return (
			<div className="book-shelf-changer">
				<select
					onChange={(event) => this.props.changeShelf(this.props.book, event.target.value)}
          defaultValue={ currentShelf }>
					<option value="none" disabled>Move to...</option>
					<option value="currentlyReading">Currently Reading</option>
					<option value="wantToRead">Want to Read</option>
					<option value="read">Read</option>
					<option value="none">None</option>
				</select>
			</div>
		)
	}
}

export default ShelfChanger
