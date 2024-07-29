import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    height: 56,
    width: '100%',
    borderRadius: 16,
    backgroundColor: colors.green,
    alignItems: 'center',
    justifyContent: 'center'
  },

  text: {
    fontSize: 16,
    color: colors.white,
    fontFamily: fonts.heading
  }
});