
import React from 'react';

class Banner extends React.Component {

	constructor (props) {

		super(props);

		this.heroMap = [
			{name: 'sm', key: 'hero_320x200'},
			{name: 'md', key: 'hero_700x300'},
			{name: 'lg', key: 'hero_1125x414'}
		];
	}

	renderHero (heroMapEntry) {

		const images = this.props.images;

		if (images) {

			const url = images[heroMapEntry.key];
			const style = {
				backgroundImage: `url(${url})`
			};

			return (
				<div
					aria-hidden="true"
					key={heroMapEntry.name}
					className={`banner-hero banner-hero-${heroMapEntry.name}`}>
					<div className="banner-hero-img" style={style} />
				</div>
			);
		}
	}

	renderHeros () {

		return (
			<div className="banner-heros">
				{this.heroMap.map((hero) => {
					return this.renderHero(hero);
				})}
			</div>
		);
	}

	render () {

		const details = this.props.details || {};

		return (
			<section className="banner">
				{this.renderHeros()}
				<div className="banner-content">
					<header className="banner-heading">{details.name}</header>
					<div className="banner-body">
						<p>{details.body}</p>
					</div>
				</div>
			</section>
		);
	}
}

export default Banner;
