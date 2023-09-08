import { View, Text, StyleSheet, Pressable } from "react-native";

export default function GoalItem({ item, onDeleteItem }) {
    return (
        <View style={styles.goalItem}>
            <Pressable
                style={({ pressed }) => pressed && styles.pressedItem}
                android_ripple={{ color: "#dddddd" }}
                onPress={() => onDeleteItem(item.id)}
            >
                <Text style={styles.goalItemText} >{item.text}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    goalItem: {
        margin: 8,
        borderRadius: 6,
        backgroundColor: "#5e0acc",
    },
    pressedItem: {
        opacity: .5,
    },
    goalItemText: {
        color: "white",
        padding: 8
    }
});