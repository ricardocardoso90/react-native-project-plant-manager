import { useState } from "react";
import { styles } from "./styles";
import colors from "../../styles/colors";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/core";
import { Button } from "../../components/Button";
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";

import AsyncStorage from '@react-native-async-storage/async-storage';

export function UserIdenfication() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>('');

  const navigation = useNavigation<any>();

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  };

  function handleInputFocus() {
    setIsFocused(true);
  };

  function handleInputChange(value: string) {
    setIsFilled(!!value);
    setName(value);
  };

  async function handleSubmit() {
    isFilled
      ? navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect'
      })
      : Alert.alert('Deu algo errado!!', `Digite um nome para prosseguir... 🥹`);

    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
    } catch (error) {
      Alert.alert(`Não foi possível salvar o nome do usuário: ${error}`)
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  {isFilled ? '😄' : '😊'}
                </Text>
                <Text style={styles.title}>
                  Como podemos {'\n'}
                  chamar você?
                </Text>
              </View>
              <TextInput
                style={[
                  styles.input,
                  (isFocused || isFilled) && { borderColor: colors.green }
                ]}
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              <View style={styles.footer}>
                <Button
                  title="Confirmar"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
};