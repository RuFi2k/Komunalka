import fonts from 'constants/fonts'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#FFFFFF',
    borderRadius: 38,
    elevation: 3,
    alignItems: 'center',
    marginTop: 38,
  },
  text: {
    ...fonts.light,
    fontSize: 20,
    lineHeight: 26,
    color: 'rgba(0, 0, 0, 0.87)',
    marginTop: 38,
    marginBottom: 25,
  },
  buttonWrapper: {
    width: '100%',
  },
  container: {
    marginTop: 32,
    paddingTop: 43,
    backgroundColor: '#FFFEFD',
    elevation: 3,
    borderRadius: 20,
    alignItems: 'center',
  },
  icon: {
    width: 80,
    height: 80,
  },
})

export default styles
