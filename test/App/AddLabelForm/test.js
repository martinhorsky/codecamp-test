import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import { AddLabelForm } from '../../../src/App/AddLabelForm';

describe(`<AddLabelForm />`, () => {
	it('input has "value" and "onChange" properties', () => {
		const wrapper = shallow(
			<AddLabelForm
				inputValue=""
				onFormSubmit={() => undefined}
				onInputValueChange={() => undefined}
			/>
		);
		expect(wrapper.find('input').props()).to.include.keys('value');
		expect(wrapper.find('input').props()).to.include.keys('onChange');
	});
	it('calls "onInputValueChange" on input change', () => {
		const onInputValueChange = spy();
		const wrapper = shallow(
			<AddLabelForm
				inputValue=""
				onFormSubmit={() => undefined}
				onInputValueChange={onInputValueChange}
			/>
		);
		wrapper.find('input').simulate('change', { target: { value: 'a' } });
		wrapper.find('input').simulate('change', { target: { value: 'ab' } });
		expect(onInputValueChange.callCount).to.equal(2);
	});
	it('calls "onFormSubmit" on form submit', () => {
		const onFormSubmit = spy();
		const wrapper = shallow(
			<AddLabelForm
				inputValue=""
				onFormSubmit={onFormSubmit}
				onInputValueChange={() => undefined}
			/>
		);
		wrapper.find('form').simulate('submit', { preventDefault: () => undefined });
		expect(onFormSubmit.calledOnce).to.be.true;
	});
	it('fills input with value from "inputValue" property', () => {
		const wrapper = shallow(
			<AddLabelForm
				inputValue="foo"
				onFormSubmit={() => undefined}
				onInputValueChange={() => undefined}
			/>
		);
		expect(wrapper.find('input').props().value).to.equal('foo');
	});
});
