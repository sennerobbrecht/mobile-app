import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
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
        onPress={() => navigation.navigate("Wishlist")}
      >
        <Text style={styles.cardTitle}>ℹ️ Whishlist</Text>
        <Text style={styles.cardText}>Bekijk hier jouw Whislist</Text>
      </TouchableOpacity>

        <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Contact")}
      >
        <Text style={styles.cardTitle}>ℹ️ Contact</Text>
        <Text style={styles.cardText}>Contact</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f0f8ff",
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
