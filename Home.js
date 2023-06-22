import React from "react";
import { View, Text, Button } from 'react-native';

const Home = ({ navigation }) => {
    return (
        <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
            <View style={{
                height: 110, width: 85, alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text>Home Page</Text>
                <Button onPress={() => navigation.navigate('GET_API')} title="Data"></Button>
                <Button onPress={() => navigation.navigate('POST_API')} title="Add Data"></Button>
            </View>
        </View >
    );
};
export default Home;