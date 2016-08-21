import React, { Component } from 'react';

import Label from './Label';

export default class Labels extends Component {
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
