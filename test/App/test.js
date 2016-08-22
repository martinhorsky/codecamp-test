import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { spy } from 'sinon';

import { App } from '../../src/App';
import AddLabelForm from '../../src/App/AddLabelForm';
import Labels from '../../src/App/Labels';

describe(`<App />`, () => {
	it('should contain <AddLabelForm /> components', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(AddLabelForm)).to.have.length(1);
	});
	it('should contain <Labels /> components', () => {
		const wrapper = shallow(<App />);
		expect(wrapper.find(Labels)).to.have.length(1);
	});
});
