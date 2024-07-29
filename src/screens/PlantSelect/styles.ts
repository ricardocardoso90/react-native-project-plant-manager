import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  header: {
    paddingHorizontal: 30,
  },

  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    // marginTop: 15
  },

  subtitle: {
    fontSize: 17,
    fontFamily: fonts.text,
    color: colors.heading,
    lineHeight: 20
  },

  enviromentList: {
    height: 40,
    paddingBottom: 5,
    justifyContent: 'center',
    marginLeft: 30,
    marginVertical: 32,
    paddingRight: 62
  },

  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center'
  },
});