import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Label from '../../../../src/App/Labels/Label';

describe(`<Label label="bar" />`, () => {
	const wrapper = shallow(<Label label="bar" />);
	it('has class "label"', () => {
		expect(wrapper.find('span').hasClass('label')).to.equal(true);
	});
	it('text is "bar"', () => {
		expect(wrapper.text()).to.equal("bar");
	});
});
