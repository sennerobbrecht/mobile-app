import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, Platform } from "react-native";

export default function Contact() {
  const [naam, setNaam] = useState("");
  const [email, setEmail] = useState("");
  const [bericht, setBericht] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmit = () => {
    if (!naam || !email || !bericht) {
      Alert.alert("Vul alle velden in aub.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      Alert.alert("Verzonden!", "Bedankt voor je bericht. We nemen zo snel mogelijk contact op.");
      setNaam("");
      setEmail("");
      setBericht("");
    }, 1200);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Contacteer ons</Text>
        <Text style={styles.subtitle}>We helpen je graag verder!</Text>
        <TextInput
          style={styles.input}
          placeholder="Naam"
          value={naam}
          onChangeText={setNaam}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={[styles.input, { height: 100 }]}
          placeholder="Je bericht"
          value={bericht}
          onChangeText={setBericht}
          multiline
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit}
          disabled={sending}
        >
          <Text style={styles.buttonText}>
            {sending ? "Verzenden..." : "Verzenden"}
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#1a237e",
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
    color: "#555",
  },
  input: {
    width: "100%",
    backgroundColor: "#f3f3f3",
    padding: 14,
    borderRadius: 10,
    fontSize: 16,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#e0e0e0",
  },
  button: {
    backgroundColor: "#FF0000",
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 48,
    marginTop: 8,
    shadowColor: "#000",
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 2,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
  },
});
