import 'react-native'

import React from 'react'
import renderer from 'react-test-renderer'
import PaymentSection from 'common/PaymentSection';

it('should render correctly', () => {
    renderer.create(<PaymentSection />)
});
