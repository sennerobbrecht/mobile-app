import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

const FilterBlogs = ({
  searchTerm,
  onSearchChange,
  sortOption,
  onSortChange,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Zoek blogs..."
        value={searchTerm}
        onChangeText={onSearchChange}
      />

      <Picker
        selectedValue={sortOption}
        onValueChange={onSortChange}
        style={styles.picker}
      >
        <Picker.Item label="Sorteer op..." value="" />
        <Picker.Item label="Datum (nieuw → oud)" value="date-desc" />
        <Picker.Item label="Datum (oud → nieuw)" value="date-asc" />
        <Picker.Item label="Titel (A-Z)" value="name-asc" />
        <Picker.Item label="Titel (Z-A)" value="name-desc" />
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

export default FilterBlogs;
