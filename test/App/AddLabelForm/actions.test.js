import { expect } from 'chai';
import {
	changeInputValue,
	submitForm,
	CHANGE_ADD_LABEL_FORM_INPUT_VALUE,
	SUBMIT_ADD_LABEL_FORM,
} from '../../../src/App/AddLabelForm/actions';

describe('AddLabelForm/actions', () => {
	it('should create an action to change input value', () => {
		const value = 'foobar';
		const expectedAction = {
			type: CHANGE_ADD_LABEL_FORM_INPUT_VALUE,
			payload: {
				value
			}
		};
		expect(changeInputValue(value)).to.be.deep.equal(expectedAction);
	});
	it('should create an action to submit input label', () => {
		const label = 'foobar';
		const expectedAction = {
			type: SUBMIT_ADD_LABEL_FORM,
			payload: {
				label
			}
		};
		expect(submitForm(label)).to.be.deep.equal(expectedAction);
	});
});
