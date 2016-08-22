import { combineReducers } from 'redux';

import { SUBMIT_ADD_LABEL_FORM } from './AddLabelForm/actions';
import input from './AddLabelForm/reducer';

function labels(state = ['rio', 'sport'], { type, payload }) {
	switch (type) {
		case SUBMIT_ADD_LABEL_FORM:
			return [ ...state, payload.label ];
		default:
			return state;
	}
}

export default combineReducers({
	input,
	labels
});
