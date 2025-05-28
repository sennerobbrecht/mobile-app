import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welkom bij de Ballonnen App</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Products")}
      >
        <Text style={styles.cardTitle}>🎈 Producten</Text>
        <Text style={styles.cardText}>Bekijk ons aanbod van ballonnen</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Blog")}
      >
        <Text style={styles.cardTitle}>📰 Blog</Text>
        <Text style={styles.cardText}>Lees het laatste nieuws en tips</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("OverOns")}
      >
        <Text style={styles.cardTitle}>ℹ️ Over Ons</Text>
        <Text style={styles.cardText}>Meer info over het ballonbedrijf</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f8ff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 30,
    color: "#333",
    textAlign: "center",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
    marginVertical: 10,
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: "#555",
  },
});

export default HomeScreen;
