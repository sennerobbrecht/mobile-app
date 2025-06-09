import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from "react-native";
import ProductCard from "../components/ProductCard";
import Filter from "../components/Filter";

const ProductScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Alle categorieën');
  const [sortOption, setSortOption] = useState('');
  const [categories, setCategories] = useState([]);

  const categoryIdToName = {
    "68339a08ba80cc812fb2a81d": "Passagiersballonnen",
    "68339a21ba80cc812fb2bac0": "Reclameballonnen",
    "68339a36b2712a87f1d0013a": "Speciale ballonnen",
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://api.webflow.com/v2/sites/67b31e0b53859433ab23a5f9/products`,
          {
            headers: {
              Authorization: `Bearer 67140fb96a79dbf4de24c2db94a56d50998d98c5dd3de965f8ead368fa029268`,
              "accept-version": "1.0.0",
              "Content-Type": "application/json",
            },
          }
        );

        const data = await response.json();

        const items = data.items.map((item) => {
          const categoryId = item.product.fieldData["category"]?.[0];
          const categoryName = categoryIdToName[categoryId] || "Onbekend";

          return {
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
            category: categoryName,
          };
        });

        setProducts(items);

        const uniqueNames = [
          "Alle categorieën",
          ...new Set(items.map((item) => item.category)),
        ];
        setCategories(uniqueNames);
      } catch (error) {
        console.error("Fout bij ophalen producten:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredAndSortedProducts = products
    .filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter(
      (product) =>
        selectedCategory === "Alle categorieën" ||
        product.category === selectedCategory
    )
    .sort((a, b) => {
      switch (sortOption) {
        case "price-asc":
          return parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1));
        case "price-desc":
          return parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1));
        case "name-asc":
          return a.title.localeCompare(b.title);
        case "name-desc":
          return b.title.localeCompare(a.title);
        default:
          return 0;
      }
    });

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#4caf50" />
        <Text>Producten laden...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Producten Overzicht</Text>

      <Filter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        sortOption={sortOption}
        onSortChange={setSortOption}
        categories={categories}
      />

      <ScrollView contentContainerStyle={styles.cardContainer}>
        {filteredAndSortedProducts.map((product) => (
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    paddingTop: 20,
  },
  header: {
    fontSize: 26,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
    color: "#333",
  },
  cardContainer: {
    alignItems: "center",
    paddingBottom: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ProductScreen;
