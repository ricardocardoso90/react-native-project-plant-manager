import { styles } from "./styles";
import { Text } from "react-native";
import { SvgFromUri } from "react-native-svg";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
  }
};

export function PlantCardPrimary({ data, ...rest }: PlantProps) {
  return (
    <RectButton style={styles.container} {...rest}>
      <SvgFromUri
        uri={data.photo}
        width={70}
        height={70}
      />

      <Text style={styles.text}>
        {data.name}
      </Text>
    </RectButton>
  )
};