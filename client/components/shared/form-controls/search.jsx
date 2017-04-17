
import React from 'react';

class SearchForm extends React.Component {

	constructor (props) {

		super(props);

		this.state = {
			query: props.query,
			onSubmit: this.onSubmit.bind(this),
			onChange: this.onChange.bind(this)
		};
	}

	onChange (e) {

		this.setState({
			query: e.target.value
		});
	}

	onSubmit (e) {

		e.preventDefault();

		if (this.props.onSubmit) {
			this.props.onSubmit(this.state.query);
		}
	}

	render () {

		return (
			<form action="/search" method="get" onSubmit={this.state.onSubmit}>
				<fieldset className="input-search">
					<input
						defaultValue={this.state.query}
						onChange={this.state.onChange}
						className="input-search-input"
						placeholder="Search..."
						type="text"
						name="search" />
					<button className="input-search-button" type="submit">
						<span className="sr-only">Search</span>
						<span className="icon icon-search" role="presentation"></span>
					</button>
				</fieldset>
			</form>
		);
	}
}

export default SearchForm;
