import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils/test.utils';
import Exercise from '../Exercise';


const setup = (props) => {
    return shallow(<Exercise {...props} />);
}


test('renders without error', () => {
    const wrapper = setup();
    const foundDomElements = findByTestAttr(wrapper, 'exercise');
    expect(foundDomElements.length).toBe(1);
});

// test('add-set adds one set', () => {
//     const wrapper = setup({ ex: { sets: [] }});
//     const addSetsLink = findByTestAttr(wrapper, 'add-set');
//     addSetsLink.simulate('click');
// });
