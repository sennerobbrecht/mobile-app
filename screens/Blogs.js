import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import BlogCard from "../components/BlogCard";

const BlogsScreen = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch("https://api.webflow.com/v2/collections/681b37e05acd11cf6d34172a/items", {
          headers: {
            Authorization: "Bearer 67140fb96a79dbf4de24c2db94a56d50998d98c5dd3de965f8ead368fa029268",
            "accept-version": "1.0.0",
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        const items = data.items.map(item => {
             console.log("Blog data:", item.fieldData);
          const date = new Date(item.fieldData.publicatiedatum).toLocaleDateString("nl-BE", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          });

          return {
            id: item._id,
            title: item.fieldData.name || "Geen titel",
            image: item.fieldData.afbeelding?.url || "https://via.placeholder.com/300x180",
            author: item.fieldData.auteur || "Onbekend",
            date,
          };
        });

        setBlogs(items);
      } catch (error) {
        console.error("Fout bij ophalen blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4caf50" />
        <Text>Blogs laden...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {blogs.map(blog => (
        <BlogCard
          key={blog.id}
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
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BlogsScreen;
