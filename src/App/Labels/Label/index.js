import React, { Component, PropTypes } from 'react';

import './styles.css';

export default class Label extends Component {

	static propTypes = {
		label: PropTypes.string.isRequired,
	};

	render() {
		const { label } = this.props;
		return (
			<div className="Label">
				<span className="label label-default">{label}</span>
			</div>
		);
	}

}
