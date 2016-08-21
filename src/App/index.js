import React, { Component } from 'react';

import AddLabelForm from './AddLabelForm';
import Labels from './Labels';

class App extends Component {

	constructor(props) {
		super(props);
		this.handleAddLabel = this.handleAddLabel.bind(this);
		this.state = {
			labels: ['rio', 'sport'],
		}
	}

	handleAddLabel(label) {
		this.setState({
			labels: [
				...this.state.labels,
				label,
			],
		});
	}

	render() {
		const { labels } = this.state;
		return (
			<div className="container">
				<header>
					<h2>Labeler</h2>
				</header>
				<div>
					<AddLabelForm onSubmit={this.handleAddLabel} />
				</div>
				<div>
					<Labels labels={labels} />
				</div>
			</div>
		);
	}
}

export default App;
