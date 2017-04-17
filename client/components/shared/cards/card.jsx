
import React from 'react';

export default class Card extends React.Component {

	renderTitleLikes (details) {
		return (
			<aside className="card-likes">
				<span>{details.fivestar.up_count.value}</span>
				<span className="icon icon-thumbs-up" role="presentation" />
			</aside>
		);
	}

	renderTitleEpisode (details) {

		if (details.fields && details.fields.episode instanceof Array && details.fields.episode[0].value) {
			return <span className="card-meta-episode">{`Episode ${details.fields.episode[0].value}`}</span>;
		}
	}

	renderTitleSeason (details) {

		if (details.fields && details.fields.season instanceof Array && details.fields.season[0].value) {
			return <span className="card-meta-season">{`Season ${details.fields.season[0].value}`}</span>;
		}
	}

	renderTitleDuration (details) {

		if (details.feature && details.feature.duration) {
			return <span className="card-meta-duration">{`${(Math.round(parseInt(details.feature.duration, 10) / 60))} mins`}</span>;
		}
	}

	renderTitleMeta (details) {

		return (
			<span className="card-meta">
				{this.renderTitleEpisode(details)}
				{this.renderTitleSeason(details)}
				{this.renderTitleDuration(details)}
			</span>
		);
	}

	renderTitleSeries (details) {

		if (details.series) {
			return (
				<h4 className="card-subtitle">
					{details.series.title}
				</h4>
			);
		}
	}

	render () {

		const details = this.props.details;

		return (
			<div className="card">
				<div className="card-img">
					<img aria-hidden="true" src={details.hero_image_withtext.hero_570x300} />
				</div>
				<div className="card-body">
					{this.renderTitleSeries(details)}
					<h3 className="card-title">{details.title}</h3>
					{this.renderTitleMeta(details)}
					{this.renderTitleLikes(details)}
				</div>
			</div>
		);
	}
};
