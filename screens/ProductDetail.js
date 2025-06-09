import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useWishlist } from "../context/WishlistContext";

const DetailsScreen = ({ route }) => {
    const { id, title, price, image, description } = route.params;

    const numericPrice = parseFloat(price.replace(/[^0-9.]/g, ''));
    const [quantity, setQuantity] = useState(1);

    const { isWishlisted, toggleWishlist } = useWishlist();

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

            <View style={styles.counterHeartRow}>
                <View style={styles.counterContainer}>
                    <TouchableOpacity style={styles.counterButton} onPress={decreaseQuantity}>
                        <Text style={styles.counterButtonText}>-</Text>
                    </TouchableOpacity>
                    <Text style={styles.quantity}>{quantity}</Text>
                    <TouchableOpacity style={styles.counterButton} onPress={increaseQuantity}>
                        <Text style={styles.counterButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.heartContainer}
                    onPress={() => toggleWishlist(id)}
                    activeOpacity={0.7}
                >
                    <Text style={styles.heart}>{isWishlisted(id) ? "❤️" : "🤍"}</Text>
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
        marginTop: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
        textAlign: "center",
    },
    price: {
        fontSize: 20,
        color: "#4caf50",
        marginBottom: 10,
        textAlign: "center",
    },
    description: {
        fontSize: 16,
        color: "#555",
        marginBottom: 20,
        textAlign: "center",
    },
    counterHeartRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20,
    },
    counterContainer: {
        flexDirection: "row",
        alignItems: "center",
    },
    counterButton: {
        backgroundColor: "#FF0000",
        paddingHorizontal: 16,
        paddingVertical: 10,
        borderRadius: 8,
        marginHorizontal: 2,
    },
    counterButtonText: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
    },
    quantity: {
        fontSize: 20,
        marginHorizontal: 10,
    },
    heartContainer: {
        marginLeft: 20,
    },
    heart: {
        fontSize: 32,
    },
    total: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000",
        textAlign: "center",
    },
});

export default DetailsScreen;
