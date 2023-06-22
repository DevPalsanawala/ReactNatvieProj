import React, { useState } from 'react';
import { Text, TextInput, View, Image, Button } from 'react-native';

const getFullName = (
  firstname,
  lastname,
) => { return firstname + '' + lastname; };

const Cat = Props => {
  const [hungry, sethungry] = useState(true);
  return (<View>
    <Text> Hello, I am {Props.name}!</Text>
    <TextInput style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
    }}
      defaultValue="Name" />

    <Text>
      I am {Props.name}!,And I am {hungry ? 'Hungry!' : 'Full'}!
    </Text>
    <Button
      onPress={() => {
        sethungry(false);
      }}
      disabled={!hungry}
      title={hungry ? 'pour me food!' : 'Thank you!'}
    />


  </View>);
};
const Test = () => {
  return (<View>
    <Text>Hello!</Text>
    <Image
      source={{ uri: 'https://reactnative.dev/docs/assets/p_cat1.png', }}
      style={{ width: 200, height: 200 }} />
    <Cat name="Dev" />
    <Cat name="Khagesh" />
    <Cat name="Parth" />
  </View>)
}

export default Test;