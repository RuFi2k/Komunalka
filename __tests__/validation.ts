import 'react-native'

import React from 'react'
import { hasNoSpaces, isEmail, isNumber, isPhone } from "services/validation";

describe('validation', () => {
    it('should validate email', () => {
        expect(isEmail('mail@mail.com')).toEqual(true);
        expect(isEmail('spoiledmail')).toEqual(false);
    });
    
    it('should validate phone number', () => {
        expect(isPhone('+0987654321')).toEqual(true)
        expect(isPhone('12432')).toEqual(false)
    });
    
    it('should validate no spaces', () => {
        expect(hasNoSpaces('nospaces')).toEqual(true);
        expect(hasNoSpaces(' with spaces ')).toEqual(false);
    });
});
    