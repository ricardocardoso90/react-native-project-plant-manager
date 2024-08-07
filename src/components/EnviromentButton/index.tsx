import { styles } from "./styles";
import { Text } from "react-native";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
};

export function EnviromentButton({ title, active = false, ...rest }: EnviromentButtonProps) {
  return (
    <RectButton
      style={[
        styles.container,
        active && styles.containerActive
      ]}
      {...rest}
    >
      <Text style={[
        styles.text,
        active && styles.textActive
      ]}>
        {title}
      </Text>
    </RectButton>
  )
};