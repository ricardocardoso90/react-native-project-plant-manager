import { styles } from "./styles";
import { TouchableOpacity, Text } from "react-native";
import { TouchableOpacityProps } from "react-native-gesture-handler";

interface Props extends TouchableOpacityProps {
  title: string;
  // onPress: () => void;
};

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity
      // onPress={onPress}
      style={styles.container}
      {...rest}
    >
      <Text style={styles.text}>
        {title}
      </Text>
    </TouchableOpacity>
  )
};