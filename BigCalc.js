import React, { useState } from "react";
import { TextInput, View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Row from "./Row";
const BigCalc = () => {
    const [txt, settxt] = useState('');
    const [val, setval] = useState('');
    const [opre, setopre] = useState('');


    const handel = (op) => {
        setval(txt);
        settxt("");
        setopre(op);
    }

    const opretions = () => {
        if (opre == "+") {
            settxt(parseFloat(val) + parseFloat(txt));
        }
        else if (opre == "-") {
            settxt(parseFloat(val) - parseFloat(txt));
        }
        else if (opre == "X") {
            settxt(parseFloat(val) * parseFloat(txt));
        }
        else if (opre == "/") {
            settxt(parseFloat(val) / parseFloat(txt));
        }
        else {
            settxt("Error")
        }
    }
    const allclear = () => {
        settxt("");
        setval("");
        setopre("");
    }

    return (
        <SafeAreaView>
            <View style={{ backgroundColor: "black", height: 800 }}>
                <Text style={{
                    fontSize: 40,
                    fontWeight: "600",
                    color: '#2a52be',
                    textAlign: 'center',
                    marginTop: 50,
                }}>
                    Calculator
                </Text>
                <TextInput
                    style={{
                        fontSize: 35,
                        height: 60,
                        backgroundColor: "#838996",
                        color: "black",
                        borderColor: '#686A6C',
                        borderWidth: 4,
                        textAlign: "right",
                        marginTop: 60,
                        marginRight: 18,
                        marginLeft: 18,
                        marginBottom: 60,
                    }}>
                    {txt}

                </TextInput>

                <Row>
                    <Text style={styles.button}
                        onPress={() => {
                            settxt("")
                        }}
                    > C
                    </Text>
                    <Text style={styles.button}
                        onPress={allclear}
                    >AC
                    </Text>
                    <Text style={styles.button}
                        onPress={() => {
                            if (txt[0] != "-") {
                                settxt("-" + txt)
                            }
                            else {
                                settxt(txt.substring(1));
                            }
                        }}
                    >+/-
                    </Text>
                    <Text style={styles.button}
                        onPress={() => handel("/")}
                    >  /
                    </Text>
                </Row>

                <Row>
                    <Text style={styles.button}
                        onPress={() => {
                            settxt(txt + "7")
                        }}
                    > 7
                    </Text>
                    <Text style={styles.button}
                        onPress={() => {
                            settxt(txt + "8")
                        }}
                    > 8
                    </Text>
                    <Text style={styles.button}
                        onPress={() => {
                            settxt(txt + "9")
                        }}
                    > 9
                    </Text>
                    <Text style={styles.button}
                        onPress={() => handel("X")}

                    > X
                    </Text>
                </Row>

                <Row>
                    <Text style={styles.button}
                        onPress={() => {
                            settxt(txt + "4")
                        }}
                    > 4
                    </Text>
                    <Text style={styles.button}
                        onPress={() => {
                            settxt(txt + "5")
                        }}
                    > 5
                    </Text>
                    <Text style={styles.button}
                        onPress={() => {
                            settxt(txt + "6")
                        }}
                    > 6
                    </Text>
                    <Text style={styles.button}
                        onPress={() => handel("-")}
                    >  -
                    </Text>
                </Row>

                <Row>
                    <Text style={styles.button}
                        onPress={() => {
                            settxt(txt + "1")
                        }} > 1
                    </Text>
                    <Text style={styles.button}
                        onPress={() => {
                            settxt(txt + "2")
                        }}
                    > 2
                    </Text>
                    <Text style={styles.button}
                        onPress={() => {
                            settxt(txt + "3")
                        }}
                    > 3
                    </Text>
                    <Text style={styles.button}
                        onPress={() => handel("+")}
                    > +
                    </Text>
                </Row>

                <Row>
                    <Text style={styles.button}
                        onPress={() => {
                            settxt(txt + ".")
                        }}
                    >  .
                    </Text>
                    <Text style={styles.button}
                        onPress={() => {
                            settxt(txt + "0")
                        }}
                    > 0
                    </Text>
                    <Text style={styles.button}
                        onPress={() => {
                            settxt(txt.substring(0, txt.length - 1));
                        }}
                    > Er
                    </Text>
                    <Text style={styles.button}
                        onPress={opretions}
                    > =
                    </Text>
                </Row>
            </View>
        </SafeAreaView >
    )

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#98AFC7",
        color: "black",
        flex: 1,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 25,
        borderColor: "#686A6C",
        borderWidth: 2,
        elevation: 20,
        margin: 15,
        fontSize: 24,
        paddingLeft: 20,
        paddingTop: 9,
    }
}
);

export default BigCalc;
