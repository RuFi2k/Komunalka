import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFEFD',
    elevation: 4,
    borderRadius: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 19,
    paddingRight: 32,
    paddingVertical: 32,
    marginBottom: 20,
  },
  templateIcon: {
    width: 32,
    height: 35,
  },
  flexStart: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textWrapper: {
    marginLeft: 30,
  },
  company: {
    ...fonts.normal,
    fontSize: 12,
    lineHeight: 14,
    color: '#000000',
  },
  description: {
    ...fonts.light,
    fontSize: 10,
    lineHeight: 12,
    color: '#000000',
  },
  body: {
    ...fonts.light,
    fontSize: 10,
    lineHeight: 12,
    color: '#000000',
    marginTop: 10,
  },
})

export default styles
