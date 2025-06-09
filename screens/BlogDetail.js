import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

const BlogDetail = ({ route }) => {
  const blog = route.params.blog;

  const plainTextContent = blog["blog-inhoud"]
    ? blog["blog-inhoud"]
        .replace(/<[^>]*>?/gm, "")     
        .replace(/&nbsp;/g, " ")       
        .trim()
    : "Geen inhoud beschikbaar.";

  return (
    <ScrollView style={styles.container}>
      {blog.image && (
        <Image
          source={{ uri: blog.image }}
          style={styles.image}
          resizeMode="contain" 
        />
      )}

      <Text style={styles.title}>{blog.title}</Text>

      <View style={styles.meta}>
        <Text style={styles.author}>{blog.author}</Text>
        <Text style={styles.date}>{blog.date}</Text>
      </View>

      <Text style={styles.content}>{plainTextContent}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: undefined,
    aspectRatio: 3 / 2,
    borderRadius: 12,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  meta: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  author: {
    fontSize: 14,
    color: "#555",
  },
  date: {
    fontSize: 14,
    color: "#555",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    color: "#333",
  },
});

export default BlogDetail;
