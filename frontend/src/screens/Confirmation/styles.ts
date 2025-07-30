import { StyleSheet } from "react-native";

import fonts from "../../styles/fonts";
import colors from "../../styles/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  content: {
    flex: 1,
    width: '100%',
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },

  emoji: {
    fontSize: 78,
  },

  title: {
    fontSize: 22,
    textAlign: 'center',
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15
  },

  subtitle: {
    textAlign: 'center',
    fontFamily: fonts.text,
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading
  },

  footer: {
    width: '100%',
    marginTop: 20,
    paddingHorizontal: 50
  }
});