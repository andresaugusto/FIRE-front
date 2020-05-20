import React from 'react';
import { shallow, configure } from 'enzyme';
import StrainForm from './StrainForm';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('StrainForm Component', () => {
	const component = shallow(<StrainForm />);
	it('should return an input field', () => {
		expect(component.find('input').length).toBe(7)
	});
});
