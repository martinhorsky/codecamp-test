import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import AddLabelForm from '../../../src/App/AddLabelForm';

describe(`<AddLabelForm />`, () => {
	it('changes input value on change event', () => {
		const wrapper = shallow(<AddLabelForm onSubmit={() => undefined} />);
		wrapper.find('input').simulate('change', { target: { value: 'abc' } });
		expect(wrapper.find('input').props().value).to.equal('abc');
	});

	it('uses handleInputChange', () => {
		const handleInputChange = spy(AddLabelForm.prototype, 'handleInputChange');
		const wrapper = shallow(<AddLabelForm onSubmit={() => undefined} />);
		wrapper.find('input').simulate('change', { target: { value: 'a' } });
		wrapper.find('input').simulate('change', { target: { value: 'ab' } });
		expect(handleInputChange.callCount).to.equal(2);
	});

	it('calls onSubmit prop when submitted', () => {
		const onSubmit = spy();
		const wrapper = shallow(<AddLabelForm onSubmit={onSubmit} />);
		wrapper.find('form').simulate('submit', { preventDefault: () => undefined });
		expect(onSubmit.calledOnce).to.be.true;
	});

	it('cleans input on submit', () => {
		const onSubmit = spy();
		const wrapper = shallow(<AddLabelForm onSubmit={onSubmit} />);
		wrapper.find('input').simulate('change', { target: { value: 'abcde' } });
		wrapper.find('form').simulate('submit', { preventDefault: () => undefined });
		expect(onSubmit.calledWith('abcde')).to.be.true;
		expect(wrapper.find('input').props().value).to.equal('');
	});
});
