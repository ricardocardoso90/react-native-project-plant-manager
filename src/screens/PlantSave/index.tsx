import { styles } from "./styles";
import { SvgFromUri } from "react-native-svg";
import { useNavigation, useRoute } from "@react-navigation/core";
import DateTimePicker, { Event } from '@react-native-community/datetimepicker';
import { Alert, Image, Platform, Text, TouchableOpacity, View } from "react-native";


import { useState } from "react";
import { format, isBefore } from "date-fns";
import waterdrop from '../../assets/waterdrop.png';
import { Button } from "../../components/Button";
import { PlantProps, loadPlant, savePlant } from "../../libs/storage";
import { ScrollView } from "react-native-gesture-handler";

interface Params {
  plant: PlantProps;
};

export function PlantSave() {
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(Platform.OS === 'ios');

  const route = useRoute();
  const { plant } = route.params as Params;

  const navigation = useNavigation<any>();

  function handleChangeTime(event: Event, dateTime: Date | undefined) {
    if (Platform.OS === 'android') {
      setShowDatePicker(oldstate => !oldstate);
    }

    if (dateTime && isBefore(dateTime, new Date())) {
      setSelectedDateTime(new Date());
      return Alert.alert('Escolha uma data no futuro! ⏱️');
    }

    if (dateTime)
      setSelectedDateTime(dateTime);
  };

  function handleOpenDateTimePickerForAndroid() {
    setShowDatePicker(oldstate => !oldstate)
  };

  async function handleSave() {
    const data = await loadPlant();

    try {
      await savePlant({
        ...plant,
        dateTimeNotification: selectedDateTime
      });

      navigation.navigate('Confirmation', {
        title: 'Tudo certo',
        subtitle: 'Fique tranquilo que sempre vamos lembrar você de cuidar da sua plantinha com muito cuidado.',
        buttonTitle: 'Muito obrigado :D',
        icon: 'smile',
        nextScreen: 'MyPlants'
      })

    } catch (error) {
      Alert.alert(`Não foi possível salvar o nome do usuário: ${error}`)
    };
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      // contentContainerStyle={styles.container}
    >
      <View style={styles.container}>
        <View style={styles.plantInfo}>
          <SvgFromUri
            uri={plant.photo}
            width={150}
            height={150}
          />

          <Text style={styles.plantName}>{plant.name}</Text>
          <Text style={styles.plantAbout}>{plant.about}</Text>
        </View>

        <View style={styles.controller}>
          <View style={styles.tipContainer}>
            <Image
              source={waterdrop}
              style={styles.tipImage}
            />
            <Text style={styles.tipText}>{plant.water_tips}</Text>
          </View>

          <Text style={styles.alertLabel}>
            Escolha o melhor horário para ser lembrado.
          </Text>

          {showDatePicker && (
            <DateTimePicker
              value={selectedDateTime}
              mode="time"
              display="spinner"
              onChange={handleChangeTime}
            />
          )}

          {Platform.OS === 'android' && (
            <TouchableOpacity
              style={styles.dateTimePickerButton}
              onPress={handleOpenDateTimePickerForAndroid}
            >
              <Text
                style={styles.dateTimePickerText}
              >
                {`Mudar Horário: ${format(selectedDateTime, 'HH:mm')}`}
              </Text>
            </TouchableOpacity>
          )}

          <Button
            title="Cadastrar planta"
            onPress={handleSave}
          />
        </View>
      </View>
    </ScrollView>
  )
};