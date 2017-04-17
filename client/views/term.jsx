
import React from 'react';
import MkLoader from 'mk-ui/loader';
import Banner from '../components/shared/banners/banner';
import VideoList from '../components/shared/lists/video-list';

import { connect } from 'react-redux';
import { getTerm } from '../actions/term';

class TermView extends React.Component {

	constructor (props) {

		super(props);

		this.loader = null;
	}

	componentWillMount () {
		this.props.getTerm();
	}

	componentWillReceiveProps (props) {

		if (props.fetching) {

			this.loader =
			this.loader || new MkLoader(this.refs.container, {
				type: 'default',
				refocus: false
			});

			this.loader.show();

			return;
		}

		this.removeLoader();
	}

	componentWillUnmount () {
		this.removeLoader();
	}

	removeLoader () {

		if (this.loader) {
			this.loader.hide();
			this.loader.unmount();
			this.loader = null;
		}
	}

	renderError () {

		if (this.props.error) {
			return (
				<div className="error" role="alert" aria-live="assertive" aria-atomic="true">
					{this.props.error.message}
				</div>
			);
		}
	}

	render () {

		const details = this.props.details;

		return (
			<div ref="container">
				<Banner details={details.term} images={details.term.termImages.hero} />
				<VideoList titles={details.titles} />
				{this.renderError()}
			</div>
		);
	}
}

const mapProps = (state) => {
	return {
		fetching: state.term.fetching,
		error: state.term.error,
		details: state.term.details
	 };
};

const mapActions = (dispatch) => {
	return {
		getTerm: () => {
			dispatch(getTerm());
		}
	};
};

export default connect(mapProps, mapActions)(TermView);
