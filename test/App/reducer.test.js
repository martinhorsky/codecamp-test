import { expect } from 'chai';
import reducer from '../../src/App/reducer';
import { SUBMIT_ADD_LABEL_FORM } from '../../src/App/AddLabelForm/actions';

describe('App/reducer.labels', () => {
	it('should return the initial state as array', () => {
		expect(
			reducer(undefined, {}).labels
		).to.be.an('array')
	});

	it(`should handle action type ${SUBMIT_ADD_LABEL_FORM}`, () => {
		const label = 'foobar';
		const state = reducer({ input: '', labels: [] }, {
			type: SUBMIT_ADD_LABEL_FORM,
			payload: {
				label
			}
		}).labels;
		expect(state).to.have.lengthOf(1);
		expect(state).to.have.members([ label ]);
	});
});
