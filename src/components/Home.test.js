import React from 'react';
import { shallow, configure } from 'enzyme';
import Home from './Home';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Home Component', () => {
	const component = shallow(<Home />);
	it('should have have a header', () => {
		expect(component.find('h1').contains('f i r e')).toBe(true);
	});
});