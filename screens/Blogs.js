import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
  const blogData = [
    {
      title: "Een dag met de luchtballon",
      image: "https://via.placeholder.com/600x300.png?text=Ballonvaart",
      author: "Senne Robbrecht",
      date: "28 mei 2025",
    },
    {
      title: "Tips voor je eerste vaart",
      image: "https://via.placeholder.com/600x300.png?text=Tips+Ballon",
      author: "Ella Robbrecht",
      date: "26 mei 2025",
    },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Onze Blog</Text>
      {blogData.map((blog, index) => (
        <BlogCard
          key={index}
          title={blog.title}
          image={blog.image}
          author={blog.author}
          date={blog.date}
        />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
});

export default Blogs;
