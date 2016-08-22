import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { changeInputValue, submitForm } from './actions';

export class AddLabelForm extends Component {

	static propTypes = {
		inputValue: PropTypes.string.isRequired,

		onFormSubmit: PropTypes.func.isRequired,
		onInputValueChange: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		const { onFormSubmit, inputValue } = this.props;
		onFormSubmit(inputValue);
	}

	handleInputChange(e) {
		const value = e.target.value;
		const { onInputValueChange } = this.props;
		onInputValueChange(value);
	}

	render() {
		const { inputValue } = this.props;
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

export default connect(
	(state) => ({
		inputValue: state.input,
	}),
	{
		onFormSubmit: submitForm,
		onInputValueChange: changeInputValue,
	}
)(AddLabelForm);
