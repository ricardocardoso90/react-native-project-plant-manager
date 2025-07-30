import { styles } from "./styles";
import { Header } from "../../components/Header";
import { Alert, FlatList, Image, Text, View } from "react-native";

import { useEffect, useState } from "react";
import { PlantProps, loadPlant, removePlant } from "../../libs/storage";
import waterdrop from '../../assets/waterdrop.png';
import { formatDistance } from "date-fns";
import { pt } from "date-fns/locale";
import { PlantCardSecundary } from "../../components/PlantCardSecundary";
import { Load } from "../../components/Load";

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();

  function handleRemove(plant: PlantProps) {
    Alert.alert(
      'Remover',
      `Deseja remover a ${plant.name}?`, [
      {
        text: 'Não 🙏',
        style: 'cancel'
      },
      {
        text: 'Sim 🥺',
        onPress: async () => {
          try {
            await removePlant(plant.id);
            setMyPlants((oldData) => oldData.filter((item) => item.id != plant.id))

          } catch (error) {
            Alert.alert('Não foi possível remover! 🥺');
          };
        }
      }
    ]);
  };

  useEffect(() => {
    async function loadStoragedData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(
        new Date(plantsStoraged[0].dateTimeNotification).getTime(),
        new Date().getTime(),
        { locale: pt }
      );

      setNextWatered(`Não esqueça de regar a ${plantsStoraged[0].name} à ${nextTime} horas.`);
      setMyPlants(plantsStoraged);
      setLoading(false);
    };

    loadStoragedData();
  }, []);

  if (loading) return <Load />

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image
          source={waterdrop}
          style={styles.spotlightImage}
        />

        <Text style={styles.spotlightText}>
          {nextWatered}
        </Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>
          Próximas regadas.
        </Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => {
            return (
              <PlantCardSecundary
                data={item}
                handleRemove={() => handleRemove(item)}
              />
            )
          }}
          showsVerticalScrollIndicator={false}
        // contentContainerStyle={{ flex: 1 }}
        />
      </View>
    </View>
  )
};