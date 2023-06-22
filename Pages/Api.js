import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Text, View, StyleSheet, Button } from 'react-native';

const Api = ({ navigation }) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reload, setreload] = useState(false);


    // const url = "https://jsonplaceholder.typicode.com/comments"
    const url = "https://64758adbe607ba4797dc0217.mockapi.io/abook"
    useEffect(() => {
        fetch(url)
            .then((resp) => resp.json())
            .then((json) => setData(json))
            .catch((error) => console.error(error))
            .finally(() => { setLoading(false); setreload(false); });
    }, [reload]);
    // async function fetchData() {
    //     try {
    //         console.log("test2");
    //         const res = await axios.get("https://64758adbe607ba4797dc0217.mockapi.io/abook");


    //         setData(res);
    //         console.log("test" + JSON.stringify(res));
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    // async function fetchData() {
    //     var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //     };

    //     fetch("http://localhost:3000/address", requestOptions)
    //         .then(response => response.text())
    //         .then(result => console.log(result))
    //         .catch(error => console.log('error', error));
    // }
    // useEffect(() => {
    //     fetchData();
    //     setLoading(false);

    // }, []);

    const Deletedata = (props) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "name": "Dev",
            "address": "Pal",
            "mobile": "9687629242",
            "email": "dev@gmail.com",
            "id": "66"
        });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://64758adbe607ba4797dc0217.mockapi.io/abook/" + props, requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        setreload(true);
    }


    return (
        <ScrollView style={styles.scrollView}>
            <View style={styles.container}>

                {
                    loading ? (
                        <Text>Loading...</Text>
                    ) : (
                        data.map((post) => {
                            return (
                                <SafeAreaView>
                                    <View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
                                        <Text style={styles.title}>{post.id}. {post.name}</Text>
                                        {/* <Text style={styles.title}>{post.name}</Text> */}
                                        <TouchableOpacity onPress={() => navigation.navigate('POST_API', { id: post.id })}>
                                            <Text style={styles.btnupdate}>Edit</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity onPress={() => Deletedata(post.id)}>
                                            <Text style={styles.btndelete}>X</Text>
                                        </TouchableOpacity>

                                    </View>
                                </SafeAreaView>
                            );
                        })
                    )
                }
            </View>
            <Button onPress={() => navigation.navigate('POST_API')} title="Add Data"></Button>

        </ScrollView >

    );

};
const styles = StyleSheet.create({
    container: {
        margin: 10,
        justifyContent: "center",
        padding: 8,
    },
    title: {
        fontSize: 25,
        color: "black",
        fontWeight: "400",
        borderColor: "black",
        borderWidth: 2,
        textAlign: "center",
        backgroundColor: "yellow",
        padding: 10,
        margin: 5,
        borderRadius: 10,
        // flex: 1,
    },
    scrollView: {
        marginBottom: 20,
    },
    titletext: {
        fontSize: 40,
        color: "black",
        fontWeight: "bold",
        textAlign: "center",
        margin: 10,
    },
    btndelete: {
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "red",
        fontWeight: "700",
        height: 40,
        width: 40,
        // borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
        margin: 5,
        marginTop: 15,
        borderRadius: 10,
        fontSize: 20,
        color: "black",
    },
    btnupdate: {
        textAlign: "center",
        textAlignVertical: "center",
        backgroundColor: "lightblue",
        height: 40,
        width: 40,
        // borderRadius: 5,
        justifyContent: "center",
        alignItems: "center",
        padding: 5,
        margin: 5,
        marginTop: 15,
        borderRadius: 10,
        fontSize: 15,
        fontWeight: "700",
        color: "black",
    }
});
export default Api;