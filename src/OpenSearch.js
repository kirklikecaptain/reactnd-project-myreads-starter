import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

class OpenSearch extends PureComponent {

	render() {
		return (
			<div className="open-search">
				<Link to='/search'>Add a book</Link>
			</div>
		)
	}
}

export default OpenSearch
