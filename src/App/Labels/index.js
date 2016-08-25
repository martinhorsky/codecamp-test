import React, { Component, PropTypes } from 'react';

import Label from './Label';

export default class Labels extends Component {

	static propTypes = {
		labels: PropTypes.arrayOf(PropTypes.string).isRequired,
	};

	render() {
		const { labels } = this.props;
		return (
			<div>
				{labels.map(
					(label) => <span key={label}><Label label={label} /> </span>
				)}
			</div>
		);
	}
}
