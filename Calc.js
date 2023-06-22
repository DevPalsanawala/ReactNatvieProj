import React, { useState, useEffect } from "react";
import { TextInput, View, Button } from 'react-native';

const Calc = () => {
    useEffect(() => {
        //Runs on the first render
        //And any time any dependency value changes
    }, [txt3]);
    const [txt1, settxt1] = useState('');
    const [txt2, settxt2] = useState('');
    const [txt3, settxt3] = useState('');
    return (
        <View>
            <TextInput
                style={{
                    height: 50,
                    borderColor: 'blue',
                    borderWidth: 5,
                    marginTop: 10,
                    marginRight: 20,
                    marginLeft: 20,
                    width: 200,

                }}
                onChangeText={(text) => settxt1(text)}
            />
            <TextInput
                style={{
                    height: 50,
                    borderColor: 'blue',
                    borderWidth: 5,
                    width: 200,
                    marginTop: 10,
                    marginRight: 20,
                    marginLeft: 20,

                }}
                onChangeText={(text) => settxt2(text)}
            />

            <TextInput
                style={{
                    height: 50,
                    borderColor: 'blue',
                    borderWidth: 5,
                    width: 200,
                    marginTop: 10,
                    marginRight: 20,
                    marginLeft: 20,
                    marginBottom: 30,


                }}
            // onChangeText={(text)=>settxt3(text)}
            >
                {txt3}
            </TextInput>

            {/* <Text
style={{
    height:50,
    borderColor: 'blue',
    width:200,
    borderWidth: 2,
}}

>
    </Text> */}
            <Button
                onPress={() => {
                    settxt3(parseFloat(txt1) + parseFloat(txt2));
                    // console.log(parseFloat(txt1)+parseFloat(txt2));
                    console.log(txt3);
                }}
                title={'Add'}
                style={{
                    height:50,
                    width:70,
                }}
            />

            <Button
                onPress={() => {
                    settxt3(parseFloat(txt1) - parseFloat(txt2));
                    console.log(txt3);

                }}
                title={'Sub'}
            />

            <Button
                onPress={() => {
                    settxt3(parseFloat(txt1) * parseFloat(txt2));
                    console.log(txt3);

                }}
                title={'Mul'}
            />

            <Button
                onPress={() => {
                    settxt3(parseFloat(txt1) / parseFloat(txt2));
                    console.log(txt3);

                }}
                title={'Div'}
            />
        </View>);
};

export default Calc;