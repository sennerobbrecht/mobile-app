import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, ActivityIndicator, ScrollView } from "react-native";
import { useWishlist } from "../context/WishlistContext";
import ProductCard from "../components/ProductCard";

const API_URL = "https://api.webflow.com/v2/sites/67b31e0b53859433ab23a5f9/products";
const API_KEY = "67140fb96a79dbf4de24c2db94a56d50998d98c5dd3de965f8ead368fa029268";

export default function Wishlist({ navigation }) {
  const { wishlist } = useWishlist();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(API_URL, {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
            "accept-version": "1.0.0",
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();

        const items = data.items.map((item) => ({
          id: item.product.id,
          title: item.product.fieldData["name"] || "Geen naam",
          price: item.skus?.[0]?.fieldData?.price?.value
            ? `$${(item.skus[0].fieldData.price.value / 100).toFixed(2)}`
            : "$0.00",
          image:
            item.skus?.[0]?.fieldData?.["main-image"]?.url ||
            "https://via.placeholder.com/300x180",
          description:
            item.product.fieldData["description"] || "Geen beschrijving",
        }));

        setProducts(items);
      } catch (e) {
        // Error handling hier
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  // Filter op producten die in de wishlist staan
  const wishProducts = products.filter((p) => wishlist.includes(p.id));
  console.log(wishProducts.map(p => p.image)); // DEBUG

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Je Wishlist</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#4caf50" />
      ) : wishProducts.length === 0 ? (
        <Text style={{ marginTop: 20 }}>
          Je hebt nog geen producten in je wishlist.
        </Text>
      ) : (
        <ScrollView style={{ width: '100%' }} contentContainerStyle={styles.cards}>
          {wishProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
              description={product.description}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  cards: {
    alignItems: "center",
    paddingBottom: 30,
    width: "100%",
  },
});
