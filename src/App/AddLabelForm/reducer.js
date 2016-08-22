import { SUBMIT_ADD_LABEL_FORM, CHANGE_ADD_LABEL_FORM_INPUT_VALUE } from './actions';

export default function (state = '', { type, payload }) {
	switch (type) {
		case SUBMIT_ADD_LABEL_FORM:
			return '';
		case CHANGE_ADD_LABEL_FORM_INPUT_VALUE:
			return payload.value;
		default:
			return state;
	}
}
