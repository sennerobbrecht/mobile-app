import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductCard = ({ title, price, image, description }) => {
    const navigation = useNavigation();
    return (
        <View style={styles.card}>
            <Image 
                source={typeof image === 'string' ? { uri: image } : image} 
                style={styles.image} 
            />
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>{price}</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("Details", { title, price, image, description })}

            >
                <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: "90%",
        padding: 16,
        backgroundColor: "#fff",
        borderRadius: 12,
        marginBottom: 16,
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        alignSelf: "center",
    },
    image: {
        width: "100%",
        height: 180,
        borderRadius: 8,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 8,
        color: "#333",
    },
    price: {
        fontSize: 18,
        color: "#4caf50",
        marginTop: 4,
    },
    button: {
        marginTop: 10,
        backgroundColor: "#4caf50",
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: "center",
    },
    buttonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },
});

export default ProductCard;


