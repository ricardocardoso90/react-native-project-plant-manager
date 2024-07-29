import { styles } from "./styles";
import { Entypo } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image, Text, TouchableOpacity, View } from "react-native";

import wateringPng from '../../assets/watering.png';
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate('UserIdentification' as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>
          Gerencie {'\n'}
          suas plantas de {'\n'}
          forma fácil
        </Text>

        <Image
          source={wateringPng}
          style={styles.image}
          resizeMode="contain"
        />

        <Text style={styles.subtitle}>
          Não esquece mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar.
        </Text>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={handleStart}
        >
          <Entypo
            name="chevron-right"
            style={styles.buttonIcon}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
};