import Input from 'components/Input'
import React from 'react'
import { View } from 'react-native'
import {
  CreditCardNumberValidate,
  expirityDateValidate,
  minLengthValidate,
  numberValidate,
} from 'services/validation'

import styles from './styles'

const formConfig = [
  {
    Component: Input,
    label:"Номер картки",
    placeholder:"0000   0000   0000   0000",
    name:"cardNumber",
    keyboardType:"decimal-pad",
    type:"creditCardNumber",
    validate:CreditCardNumberValidate,
    required:true,
    underlineColor:"transparent",
    style:styles.input
  },
  {
    Component: Input,
    label:"Термін",
    placeholder:"01 / 01",
    name:"expiryDate",
    keyboardType:"decimal-pad",
    type:"expiryDate",
    required: true,
    validate: expirityDateValidate,
    style: [styles.input, styles.rowItem],
    underlineColor:"transparent",
  },
  {
    Component: Input,
    label: "CVC код",
    placeholder: "CVS",
    name:"securityCode",
    keyboardType: "decimal-pad",
    type:"password",
    maxLength:3,
    required: true,
    validate: [numberValidate, minLengthValidate(3)],
    style:[styles.input, styles.rowItem],
    underlineColor:"transparent"
  }
]

const Form = () => (
  <View>
    {formConfig.map(({ Component, ...props }) => <Component {...props} />)}
  </View>
)

export default React.memo(Form)
