import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';


const Apipsot = ({ navigation }) => {

    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [mobileNo, setMobileNo] = useState("");
    const [email, setEmail] = useState("");
    const [edit, setEdit] = useState(false);

    const route = useRoute()
    const url = "https://64758adbe607ba4797dc0217.mockapi.io/abook"

    if (route.params != undefined && route.params.id != undefined) {
        useEffect(() => {
            //        console.log(route.params.id)

            if (route.params.id) {
                fetch(url + "/" + route.params.id)
                    .then((resp) => resp.json())
                    .then((json) => setData(json))
                    .catch((error) => console.error(error))
                    .finally(() => { setLoading(false); setreload(false); });
            }
        }, [route.params.id])
    }
    function setData(json) {

        setId(json.id);
        setName(json.name);
        setAddress(json.address);
        setEmail(json.email);
        setMobileNo(json.mobile);
        setEdit(true);
    }

    const submitbtn = () => {
        if (edit == true) {
            updateData();
            // cleardata();
        }
        else {
            Postmethod();
            cleardata();
        }
    }
    //console.log(navigation.getState())
    const Postmethod = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var data = {};
        data.name = name;
        data.address = address;
        data.id = id;
        data.mobileNo = mobileNo;
        data.email = email;
        var raw = JSON.stringify(data);
        
        // var raw = JSON.stringify({
        //     "name": name,
        //     "address": address,
        //     "mobile": mobileNo,
        //     "email": email,
        //     "id": id
        // });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://64758adbe607ba4797dc0217.mockapi.io/abook", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    };
    const cleardata = () => {
        setId("");
        setName("");
        setAddress("");
        setMobileNo("");
        setEmail("");
    };

    const updateData = () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": name,
            "address": address,
            "mobile": mobileNo,
            "email": email,
            "id": id,
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://64758adbe607ba4797dc0217.mockapi.io/abook/" + id, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));

    }

    return (
        <>
            <View>
                <Text style={styles.title}>
                    {
                        edit ? "UPDATE" : "ADD_DATA"
                    }
                </Text>
                <TextInput style={styles.input}
                    placeholder="Id"
                    value={id}
                    onChangeText={(text) => setId(text)}
                />
                <TextInput style={styles.input}
                    placeholder="Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                />
                <TextInput style={styles.input}
                    placeholder="Address"
                    value={address}
                    onChangeText={(text) => setAddress(text)}
                />
                <TextInput style={styles.input}
                    placeholder="MobileNo"
                    value={mobileNo}
                    onChangeText={(text) => setMobileNo(text)}
                />
                <TextInput style={styles.input}
                    placeholder="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                />
            </View>
            <View style={styles.Button}>
                <Button
                    title="Submit"
                    // onPress={Postmethod}
                    onPress={() => { submitbtn() }}
                />
            </View>
            <View style={styles.Button}>
                <Button onPress={() => navigation.navigate('GET_API')} title="Data"></Button>
            </View>
        </>
    )
};


const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        textAlign: 'center',
        padding: 20,
        fontWeight: 'bold',
        color: "blue"
    },
    input: {
        color: "black",
        height: 50,
        width: 300,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "blue",
        margin: 10,
        marginRight: 20,
        marginLeft: 20,
        padding: 10,
        fontSize: 20,
    },
    Button: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'stretch',
        height: 60,
        width: 350,
        margin: 10,
        marginRight: 20,
        marginLeft: 20,
        padding: 10,
        fontSize: 20,

    }
})

export default Apipsot;