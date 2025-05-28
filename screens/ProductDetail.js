import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const DetailsScreen = ({ route }) => {
    const { title, price, image, description } = route.params;

    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, '')); // haalt getal uit prijsstring
    const [quantity, setQuantity] = useState(1);

    const increaseQuantity = () => setQuantity(prev => prev + 1);
    const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

    const totalPrice = (numericPrice * quantity).toFixed(2);

    return (
        <View style={styles.container}>
            {image && (
                <Image
                    source={typeof image === 'string' ? { uri: image } : image}
                    style={styles.image}
                />
            )}
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>Prijs per stuk: {price}</Text>
           <Text style={styles.description}>{description}</Text>


            <View style={styles.counterContainer}>
                <TouchableOpacity style={styles.counterButton} onPress={decreaseQuantity}>
                    <Text style={styles.counterButtonText}>-</Text>
                </TouchableOpacity>
                <Text style={styles.quantity}>{quantity}</Text>
                <TouchableOpacity style={styles.counterButton} onPress={increaseQuantity}>
                    <Text style={styles.counterButtonText}>+</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.total}>Totaal: ${totalPrice}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
        alignItems: "center",
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 8,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
    },
    price: {
        fontSize: 20,
        color: "#4caf50",
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        color: "#555",
        marginBottom: 20,
        textAlign: "center",
    },
    counterContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    counterButton: {
        backgroundColor: "#FF0000",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
    },
    counterButtonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    quantity: {
        fontSize: 20,
        marginHorizontal: 20,
    },
    total: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000",
    },
});

export default DetailsScreen;
