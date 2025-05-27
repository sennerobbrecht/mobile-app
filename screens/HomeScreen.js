import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import ProductCard from '../components/ProductCard';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Producten Overzicht</Text>
            <ScrollView contentContainerStyle={styles.cardContainer}>
                <ProductCard 
                    title="Cameron A-type" 
                    price="$9.99" 
                    image={require('../images/ballon.jpg')} 
                />
                <ProductCard 
                    title="Sky Explorer" 
                    price="$29.99" 
                    image="https://via.placeholder.com/300x180" 
                />
                <ProductCard 
                    title="Hot Air Deluxe" 
                    price="$19.99" 
                    image={require('../images/ballon.jpg')} 
                />
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
});

export default HomeScreen;
