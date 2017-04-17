
import React from 'react';
import Selectmenu from '../form-controls/selectmenu';
import ScrollReset from '../clickables/scroll-reset';
import Card from '../cards/card';

class VideoList extends React.Component {

	constructor (props) {

		super(props);

		this.state = {
			page: 1,
			itemsPerPage: 12,
			onLoadMore: this.onLoadMore.bind(this)
		};
	}

	onLoadMore () {

		const last = this.state.page * this.state.itemsPerPage;

		if (last < this.props.titles.length) {
			this.setState({
				page: this.state.page + 1
			})
		}
	}

	renderTitle (title) {

		return (
			<li key={title.nid} className="card-list-item">
				<Card details={title} />
			</li>
		);
	}

	renderTitles () {

		const state = this.state;
		const titles = (this.props.titles || []).slice(
			0, state.page * state.itemsPerPage);

		return (
			<ul className="card-list">
				{titles.map((title) => {
					return this.renderTitle(title);
				})}
			</ul>
		);
	}

	render () {

		return (
			<section className="panel panel-videolist">
				<header className="panel-heading">
					<h2 className="sr-only">Video List</h2>
					<aside className="panel-filter">
						<h3 className="panel-filter-title">Sort By</h3>
						<Selectmenu label="Select Sort Order" />
					</aside>
				</header>
				<div className="panel-body">
					<h4 className="h6 text-accent">
						<span>We suggest you start here</span>
						<span className="icon icon-forward icon-rotate" role="presentation"></span>
					</h4>
					{this.renderTitles()}
				</div>
				<div className="panel-footer">
					<button
						className="btn btn-bar"
						onClick={this.state.onLoadMore}
						disabled={this.state.page * this.state.itemsPerPage >= this.props.titles}>
							Load More
					</button>
					<ScrollReset />
				</div>
			</section>
		);
	}
}

export default VideoList;
