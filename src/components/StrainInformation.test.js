import React from 'react';
import { shallow, configure } from 'enzyme';
import StrainInformation from './StrainInformation';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('StrainInformation Component', () => {
	const component = shallow(<StrainInformation />);
	it('should display a details container', () => {
		expect(component.find('.details-container').length).toEqual(1);
	});
});
