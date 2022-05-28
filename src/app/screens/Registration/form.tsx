import email from 'assets/icons/email.png'
import lock from 'assets/icons/lock.png'
import lockOpen from 'assets/icons/lockOpen.png'
import userFilled from 'assets/icons/userFilled.png'
import userOutlined from 'assets/icons/userOutlined.png'
import Input from 'components/Input'
import { minPasswordLen } from 'constants/index'
import React from 'react'
import { Image } from 'react-native'
import { Validator } from 'redux-form'
import { emailValidate, minLengthValidate } from 'services/validation'

import IFormData from './IFormData.d'
import styles from './styles'
import * as Strings from './strings'

const lengthValidate = minLengthValidate(minPasswordLen)
const confirmPasswordValidate: Validator = (
  value: string,
  allValues: IFormData,
) =>
  !value || value.localeCompare(allValues.password) === 0
    ? undefined
    : "Password doesn't match"

type FormConfig = {
  Component: React.FC
  name: string
  label: string
  placeholder: string
  keyboardType?: string
  validate?: () => (string | undefined)
  style: unknown
  type?: string
  autoCapitalize?: string
  right: React.Element
  required: boolean
}[]

const formConfig: FormConfig = [
  {
    Component: Input,
    name: "email",
    label: Strings.EMAIL_ADDRESS,
    placeholder: "komunalshik@gmail.com",
    keyboardType: "email-address",
    validate: emailValidate,
    style: styles.input,
    autoCapitalize: "none",
    right: <Image source={email} style={styles.rightIcon} />,
    required: true,
  },
  {
    Component: Input,
    name: "name",
    label: Strings.NAME,
    placeholder: Strings.ENTER_NAME,
    style: styles.input,
    right: <Image source={userOutlined} style={styles.rightIcon} />,
    required: true
  },
  {
    Component: Input,
    name: "familyName",
    label: Strings.SURNAME,
    placeholder: Strings.ENTER_SURNAME,
    style: styles.input,
    right: <Image source={userFilled} style={styles.rightIcon} />,
    required: true,
  },
  {
    Component: Input,
    name: "password",
    label: Strings.PASSWORD,
    placeholder: Strings.ENTER_PASSWORD,
    style: styles.input,
    type: "password",
    validate: lengthValidate,
    right: <Image source={lock} style={styles.rightIcon} />,
    required: true,
  },
  {
    Component: Input,
    name: "confirmPassword",
    label: Strings.CONFIRM_PASSWORD,
    placeholder: Strings.CONFIRM_PASSWORD,
    style: styles.input,
    type: "password",
    validate: confirmPasswordValidate,
    right: <Image source={lockOpen} style={styles.rightIcon} />,
    required: true,
  }
]

const Form = () => (
  <>
    {formConfig.map(({ Component, ...props }) => <Component {...props} key={props.name} />)}
  </>
)

export default React.memo(Form)
