import React, {useContext} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {StoreOneContext} from '../provider/StoreOne';

const PageTwo = () => {
  const data = useContext(StoreOneContext);
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};
export default PageTwo;
