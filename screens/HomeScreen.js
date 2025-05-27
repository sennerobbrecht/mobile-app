import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, ActivityIndicator } from "react-native";
import ProductCard from "../components/ProductCard";


const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(`https://api.webflow.com/v2/sites/67b31e0b53859433ab23a5f9/products`, {
                    headers: {
                        Authorization: `Bearer 67140fb96a79dbf4de24c2db94a56d50998d98c5dd3de965f8ead368fa029268`,
                        "accept-version": "1.0.0",
                        "Content-Type": "application/json",
                    },
                });

                const data = await response.json();
                console.log("Webflow response:", data); // Debug
                console.log("main-image veld voorbeeld:", data.items[0].product.fieldData["main-image"]);


            const items = data.items.map(item => ({
    id: item.product.id,
    title: item.product.fieldData["name"] || "Geen naam",
    price: item.skus?.[0]?.fieldData?.price?.value
        ? `$${(item.skus[0].fieldData.price.value / 100).toFixed(2)}`
        : "$0.00",
    image: item.skus?.[0]?.fieldData?.["main-image"]?.url || "https://via.placeholder.com/300x180",
    description: item.product.fieldData["description"] || "Geen beschrijving",
}));


                setProducts(items);
            } catch (error) {
                console.error("Fout bij ophalen producten:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

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
            <ScrollView contentContainerStyle={styles.cardContainer}>
                {products.map(product => (
                 <ProductCard
                 key={product.id}
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

export default HomeScreen;
