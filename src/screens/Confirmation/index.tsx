import { Text, View } from "react-native";
import { styles } from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/core";
import { Button } from "../../components/Button";

interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
};

const emojis = {
  hug: '🤗',
  smile: '😄'
};

export function Confirmation() {
  const navigation = useNavigation();
  const routes = useRoute();

  const { title, subtitle, buttonTitle, icon, nextScreen } = routes.params as Params;

  function handleMoveOn() {
    navigation.navigate(nextScreen as never);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        
        <Text style={styles.emoji}> {emojis[icon]} </Text>
        <Text style={styles.title}> {title} </Text>
        <Text style={styles.subtitle}> {subtitle} </Text>
        
        <View style={styles.footer} >
          <Button
            title={buttonTitle}
            onPress={handleMoveOn}
          />
        </View>
      </View>
    </SafeAreaView>
  )
};