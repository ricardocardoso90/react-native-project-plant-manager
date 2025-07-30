import { styles } from "./styles";
import { useEffect, useState } from "react";
import { Alert, FlatList, Image, Text, View } from "react-native";

import { pt } from "date-fns/locale";
import { formatDistance } from "date-fns";

import { Load } from "../../components/Load";
import { Header } from "../../components/Header";
import { PlantCardSecundary } from "../../components/PlantCardSecundary";

import waterdrop from "../../assets/waterdrop.png";
import { PlantProps, loadPlant, removePlant } from "../../libs/storage";

export function MyPlants() {
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);

  function handleRemove(plant: PlantProps) {
    Alert.alert("Remover", `Deseja remover a ${plant.name}?`, [
      { text: "Não 🙏", style: "cancel" },
      {
        text: "Sim 🥺",
        onPress: async () => {
          try {
            await removePlant(plant.id);
            setMyPlants((oldData) =>
              oldData.filter((item) => item.id != plant.id)
            );
            if (myPlants.length === 0) {
              setNextWatered("Nenhuma planta cadastrada para regar.");
            } else {
              const updatedPlants = myPlants.filter((item) => item.id !== plant.id);
              if (updatedPlants.length > 0) {
                const nextTime = formatDistance(
                  new Date(updatedPlants[0].dateTimeNotification).getTime(),
                  new Date().getTime(), { locale: pt }
                );
                setNextWatered(`Não esqueça de regar a ${updatedPlants[0].name} à ${nextTime} horas.`);
              } else {
                setNextWatered("Nenhuma planta cadastrada para regar.");
              };
            };
          } catch (error) {
            console.error("Erro ao remover planta:", error);
            Alert.alert("Não foi possível remover! 🥺");
          }
        },
      },
    ]);
  }

  useEffect(() => {
    async function loadStoragedData() {
      try {
        const plantsStoraged = await loadPlant();
        if (plantsStoraged.length > 0) {
          const sortedPlants = plantsStoraged.sort(
            (a: PlantProps, b: PlantProps) =>
              Math.ceil(new Date(a.dateTimeNotification).getTime()) -
              Math.ceil(new Date(b.dateTimeNotification).getTime())
          );

          const nextTime = formatDistance(
            new Date(sortedPlants[0].dateTimeNotification).getTime(),
            new Date().getTime(),
            { locale: pt }
          );

          setNextWatered(`Não esqueça de regar a ${sortedPlants[0].name} à ${nextTime} horas.`);
          setMyPlants(sortedPlants);
        } else {
          setNextWatered("Nenhuma planta cadastrada para regar.");
          setMyPlants([]);
        }

        setLoading(false);
      } catch (error) {
        console.error("Erro ao carregar dados das plantas:", error);
        Alert.alert(
          "Erro",
          "Não foi possível carregar suas plantas. Tente novamente mais tarde."
        );
        setLoading(false);
      }
    }

    loadStoragedData();
  }, []);

  if (loading) return <Load />;

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.spotlight}>
        <Image source={waterdrop} style={styles.spotlightImage} />

        <Text style={styles.spotlightText}>{nextWatered}</Text>
      </View>

      <View style={styles.plants}>
        <Text style={styles.plantsTitle}>Próximas regadas.</Text>

        <FlatList
          data={myPlants}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => {
            return (
              <PlantCardSecundary
                data={item}
                handleRemove={() => handleRemove(item)}
              />
            );
          }}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ flex: 1 }}
        />
      </View>
    </View>
  );
}
