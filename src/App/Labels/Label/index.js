import React, { Component } from 'react';

import './styles.css';

export default class Label extends Component {
	render() {
		const { label } = this.props;
		return (
			<div className="Label">
				<span className="label label-default">{label}</span>
			</div>
		);
	}
}
