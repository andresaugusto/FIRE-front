import React from 'react';
import { shallow, configure } from 'enzyme';
import StrainsList from './StrainsList';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });


describe('StrainsList Component', () => {
	const component = shallow(<StrainsList />);
	it('should display a gallery container for api results', () => {
		expect(component.find('.strains-gallery-container').length).toEqual(1);
	});
});
