import colors from 'constants/colors'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  statisticButton: {
    backgroundColor: colors.orangePeel,
    borderRadius: 20,
    paddingHorizontal: 22,
    paddingVertical: 3,
  },
  selected: {
    backgroundColor: colors.blue,
  },
  text: {
    fontFamily: 'SourceSansPro-ExtraLightItalic',
    fontStyle: 'italic',
    fontWeight: '200',
    fontSize: 12,
    lineHeight: 15,
    color: colors.white,
  },
})

export default styles
