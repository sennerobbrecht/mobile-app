import React from "react";
import { View, TextInput, StyleSheet, Text } from "react-native";
import { Picker } from "@react-native-picker/picker";

const Filter = ({
  searchTerm,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  sortOption,
  onSortChange,
  categories
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Zoek producten..."
        value={searchTerm}
        onChangeText={onSearchChange}
      />

      <Picker
        selectedValue={selectedCategory}
        onValueChange={onCategoryChange}
        style={styles.picker}
      >
        {categories.map((category, index) => (
          <Picker.Item label={category} value={category} key={index} />
        ))}
      </Picker>

      <Picker
        selectedValue={sortOption}
        onValueChange={onSortChange}
        style={styles.picker}
      >
        <Picker.Item label="Sorteer op..." value="" />
        <Picker.Item label="Prijs (laag → hoog)" value="price-asc" />
        <Picker.Item label="Prijs (hoog → laag)" value="price-desc" />
        <Picker.Item label="Naam (A-Z)" value="name-asc" />
        <Picker.Item label="Naam (Z-A)" value="name-desc" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  picker: {
    backgroundColor: "#fff",
    marginBottom: 10,
  },
});

export default Filter;
