import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
 

import ProductCard from '../components/ProductCard.js';

const HomeScreen = (navigation) => {
  return (
        <View>
            
            <ProductCard />
            <ProductCard />
          
        </View>
    );
};


const styles = StyleSheet.create({
    card: {
        width: 300,
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 16,
    },
    image: {
        width: "100%",
        height: 150,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        marginTop: 8,
    },
    description: {
        fontSize: 14,
        color: "#555",
        marginTop: 4,
    },
});

export default HomeScreen;