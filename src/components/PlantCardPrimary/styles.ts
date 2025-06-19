import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    maxWidth: '45%',
    borderRadius: 20,
    paddingVertical: 10,
    margin: 10,
    alignItems: 'center',
    backgroundColor: colors.shape,
  },

  text: {
    marginVertical: 16,
    color: colors.green_dark,
    fontFamily: fonts.heading
  }
});