import { styles } from "./styles";
import { Image, Text, View } from "react-native";

import useImg from '../../assets/ricardo.jpg';
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function Header() {
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    async function loadStorageUserName() {
      const user = await AsyncStorage.getItem('@plantmanager:user');
      setUserName(user || '');
    };

    loadStorageUserName();
  }, [userName]);

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
      </View>
      <Image
        source={useImg}
        style={styles.image}
      />
    </View>
  )
}