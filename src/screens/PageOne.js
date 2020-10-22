import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import {StoreOneContext} from '../provider/StoreOne';

const PageOne = () => {
  const store1 = useContext(StoreOneContext);
  return (
    <ScrollView>
      <Text>{store1.name}</Text>
      <TextInput
        value={store1.name}
        onChangeText={store1.setName}
        placeholder={'Bir seyler yaz'}
        style={{backgroundColor: '#ccc', marginHorizontal: 13}}
      />
      {store1.apiData.map((item, index) => {
        return <Text key={index}>{item.title}</Text>;
      })}
    </ScrollView>
  );
};
export default PageOne;
