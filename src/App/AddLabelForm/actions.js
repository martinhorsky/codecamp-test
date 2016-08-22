export const SUBMIT_ADD_LABEL_FORM = 'SUBMIT_ADD_LABEL_FORM';
export const CHANGE_ADD_LABEL_FORM_INPUT_VALUE = 'CHANGE_ADD_LABEL_FORM_INPUT_VALUE';

export function submitForm(label) {
	return {
		type: SUBMIT_ADD_LABEL_FORM,
		payload: {
			label,
		},
	}
}

export function changeInputValue(value) {
	return {
		type: CHANGE_ADD_LABEL_FORM_INPUT_VALUE,
		payload: {
			value,
		},
	}
}
