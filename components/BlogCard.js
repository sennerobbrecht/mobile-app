import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const BlogCard = ({ title, image, author, date }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />

      <Text style={styles.title}>{title}</Text>

      <View style={styles.footer}>
        <Text style={styles.author}>{author}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    width: "100%",
  },
  image: {
    width: "100%",
    height: 180,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    margin: 10,
    color: "#333",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
  author: {
    fontSize: 12,
    color: "#777",
  },
  date: {
    fontSize: 12,
    color: "#777",
  },
});

export default BlogCard;
