import React from 'react';
import { shallow, configure } from 'enzyme';
import StrainForm from './StrainForm';

import Create from './Create';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Create component', () => {
	const component = shallow(<Create />);
   
    it('should contain a child component called StrainForm', () => {
		expect(component.find(StrainForm).length).toBe(1);
	});
});
