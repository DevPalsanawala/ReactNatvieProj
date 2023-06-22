import React from "react";
import { StyleSheet, View } from "react-native";

const Row = ({ children }) => {
    return <View style={style.Container}>{children}</View>;
};

const style = StyleSheet.create({
    Container: {
        marginLeft: 15,
        marginRight: 15,
        flexDirection: "row",
    },
});

export default Row;