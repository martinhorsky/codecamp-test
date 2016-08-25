import React, { PropTypes, Component } from 'react';

export default class AddLabelForm extends Component {

	static propTypes = {
		onSubmit: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
		this.state = {
			inputValue: '',
		};
	}

	handleSubmit(e) {
		e.preventDefault();
		const { onSubmit } = this.props;
		const { inputValue } = this.state;
		onSubmit(inputValue);
		this.setState({
			inputValue: '',
		});
	}

	handleInputChange(e) {
		const value = e.target.value;
		this.setState({
			inputValue: value,
		});
	}

	render() {
		const { inputValue } = this.state;
		return (
			<div>
				<form onSubmit={this.handleSubmit}>
					<div className="input-group input-group-lg">
						<input className="form-control" onChange={this.handleInputChange} value={inputValue} />
						<span className="input-group-btn">
							<button className="btn btn-primary" type="submit">Přidat</button>
						</span>
					</div>
				</form>
			</div>
		);
	}
}
