import { StyleSheet } from "react-native";

import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

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