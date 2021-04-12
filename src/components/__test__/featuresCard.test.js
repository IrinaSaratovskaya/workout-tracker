import React from 'react';
import { shallow } from 'enzyme';

import { findByTestAttr } from '../../utils/test.utils';
import FeaturesCard from '../FeaturesCard';


const setup = (props) => {
    return shallow(<FeaturesCard {...props} />);
}


test('renders without error', () => {
    const wrapper = setup();
    const foundDomElements = findByTestAttr(wrapper, 'features-card');
    expect(foundDomElements.length).toBe(1);
});
test('Renders with a className equal to the variant', () => {
    const wrapper = setup({ card: {icon: 'fas fa-check-square' }});
    const icon = findByTestAttr(wrapper, 'features-card-icon');
    expect(icon.hasClass('fas fa-check-square')).toBe(true);
});
test('features-card-title displays correct value', () => {
    const wrapper = setup({ card: {title: "Tracker" }});
    const title = findByTestAttr(wrapper, "features-card-title").text();
    expect(title).toBe("Tracker");
});
test('features-card-description displays correct value', () => {
    const wrapper = setup({ card: {description: "Description: we offer... Lorem ipsum dolor sit amet, consectetur adipisicing elit." }});
    const description = findByTestAttr(wrapper, "features-card-description").text();
    expect(description).toBe("Description: we offer... Lorem ipsum dolor sit amet, consectetur adipisicing elit.");
});