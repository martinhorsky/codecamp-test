import { expect } from 'chai';
import reducer from '../../../src/App/AddLabelForm/reducer';
import { CHANGE_ADD_LABEL_FORM_INPUT_VALUE, SUBMIT_ADD_LABEL_FORM } from '../../../src/App/AddLabelForm/actions';

describe('AddLabelForm/reducer', () => {
	it('should return the initial state', () => {
		expect(
			reducer(undefined, {})
		).to.be.equal('')
	});

	it(`should handle action type ${CHANGE_ADD_LABEL_FORM_INPUT_VALUE}`, () => {
		const value = 'foobar';
		expect(
			reducer(undefined, {
				type: CHANGE_ADD_LABEL_FORM_INPUT_VALUE,
				payload: {
					value
				}
			})
		).to.be.equal(value);
	});

	it(`should clean state on action type ${SUBMIT_ADD_LABEL_FORM}`, () => {
		const label = 'foobar';
		expect(
			reducer('xyz', {
				type: SUBMIT_ADD_LABEL_FORM,
				payload: {
					label
				}
			})
		).to.be.equal('');
	});
});
