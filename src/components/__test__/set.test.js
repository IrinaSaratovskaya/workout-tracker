import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils/test.utils';
import Set from '../Set';


const setup = (props) => {
    return shallow(<Set {...props} />);
}


test('renders without error', () => {
    const wrapper = setup();
    const foundDomElements = findByTestAttr(wrapper, 'set');
    expect(foundDomElements.length).toBe(1);
});
test('reps-input displays correct value', () => {
    const wrapper = setup({set: {reps: 0, comment: ''}});
    const input = findByTestAttr(wrapper, 'reps-input');
    expect(input.props().value).toBe(0);
});
test('comment-input displays correct value', () => {
    const wrapper = setup({set: {reps: 0, comment: ''}});
    const input = findByTestAttr(wrapper, 'comment-input');
    expect(input.props().value).toBe('');
});



















// test('renders without error example', () => {
//     // const wrapper = shallow(
//     //     <Set
//     //         set={{reps: 1}}
//     //         setIndex={1}
//     //     />
//     // );
//     const wrapper = setup({
//         set: { reps: 1 },
//         setIndex: 1,
//     });
//     // const component = wrapper.find(`[data-test="set"]`);
//     const component = findByTestAttr(wrapper, 'set');
//     expect(component.length).toBe(1);
// });
