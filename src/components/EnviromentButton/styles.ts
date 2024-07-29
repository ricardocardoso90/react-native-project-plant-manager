import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    width: 76,
    height: 40,
    backgroundColor: colors.shape,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    marginHorizontal: 5,
  },

  containerActive: {
    backgroundColor: colors.green_light,
  },

  text: {
    color: colors.heading,
    fontFamily: fonts.text,
  },

  textActive: {
    color: colors.green_dark,
    fontFamily: fonts.heading,
  }
});