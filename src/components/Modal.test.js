import React from 'react';
import { shallow, configure } from 'enzyme';
import Modal from './Modal';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Modal Component', () => {
	const component = shallow(<Modal />);
	it('should return text prompt', () => {
		expect(component.find('button').text()).toEqual('confirm');
	});
});
