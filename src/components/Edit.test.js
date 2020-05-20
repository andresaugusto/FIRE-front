import React from 'react';
import { shallow, configure } from 'enzyme';
import StrainForm from './StrainForm';

import Edit from './Edit';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Edit component', () => {
	const component = shallow(<Edit />);

	it('should contain a child component called StrainForm', () => {
		expect(component.find(StrainForm).length).toBe(1);
	});
});
