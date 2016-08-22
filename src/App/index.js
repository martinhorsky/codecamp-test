import React, { Component } from 'react';
import { connect } from 'react-redux';

import AddLabelForm from './AddLabelForm';
import Labels from './Labels';

export class App extends Component {

	render() {
		const { labels } = this.props;
		return (
			<div className="container">
				<header>
					<h2>Labeler</h2>
				</header>
				<div>
					<AddLabelForm />
				</div>
				<div>
					<Labels labels={labels} />
				</div>
			</div>
		);
	}
}

export default connect(
	(state) => ({
		labels: state.labels,
	})
)(App);
