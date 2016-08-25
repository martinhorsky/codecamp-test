import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';

import Labels from '../../../src/App/Labels';
import Label from '../../../src/App/Labels/Label';

describe(`<Labels labels={['foo', 'bar']} />`, () => {
	it('should contain two <Label />', () => {
		const wrapper = shallow(<Labels labels={['foo', 'bar']} />);
		expect(wrapper.find(Label).length).to.equal(2);
	});
});
