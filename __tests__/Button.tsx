import 'react-native'

import React from 'react'
import renderer from 'react-test-renderer'
import Button from 'components/Button';

it('should render correctly', () => {
    const TEXT = "button text";
    renderer.create(<Button>{TEXT}</Button>);
});
