import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductCard = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <Image
            source = {require('../images/ballon.jpg')}
            style = {styles.image}
            />
            <Text style={styles.title}>Cameron A-type</Text>
            <Text style={styles.price}>$9.99</Text>
            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate("Details")}>

            

                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>

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

export default ProductCard;
