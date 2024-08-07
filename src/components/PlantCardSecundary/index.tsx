import { styles } from "./styles";
import { Animated, Text, View } from "react-native";
import { SvgFromUri } from "react-native-svg";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import Swipeable from "react-native-gesture-handler/Swipeable";

import { Feather } from '@expo/vector-icons';
import colors from "../../styles/colors";

interface PlantProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  handleRemove: () => void;
};

export function PlantCardSecundary({ data, handleRemove, ...rest }: PlantProps) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <RectButton
              style={styles.buttonRemove}
              onPress={handleRemove}
            >
              <Feather
                name="trash"
                size={32}
                color={colors.white}
              />
            </RectButton>
          </View>
        </Animated.View>
      )}
    >
      <RectButton style={styles.container} {...rest}>
        <SvgFromUri
          uri={data.photo}
          width={50}
          height={50}
        />

        <Text style={styles.title}>
          {data.name}
        </Text>

        <View style={styles.details}>
          <Text style={styles.timeLabel}>
            Regas às
          </Text>

          <Text style={styles.time}>
            {data.hour}
          </Text>
        </View>
      </RectButton>
    </Swipeable>
  )
};