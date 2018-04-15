import React, { Component } from 'react'
import ShelfChanger from './ShelfChanger'

class Book extends Component {

	render() {


		return (
				<div className="book">
					<div className="book-top">
						<div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${this.props.book.imageLinks.thumbnail})` }}></div>
						<ShelfChanger
							book={ this.props.book }
							books={ this.props.books }
							changeShelf={ this.props.changeShelf }
							/>
					</div>
					<div className="book-title">{this.props.book.title}</div>
					{
						//handle unknown authors
						this.props.book.authors
						?	this.props.book.authors.map((author, index) => (<div className='book-authors' key={ index }>{ author }</div>))
						: <div className='book-authors'>Author Unknown</div>
					}
				</div>
		)
	}
}

export default Book
