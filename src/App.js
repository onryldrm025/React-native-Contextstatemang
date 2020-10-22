import * as React from 'react';
import {Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {StoreOne} from './provider/StoreOne';
import PageOne from './screens/PageOne';
import PageTwo from './screens/PageTwo';


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <StoreOne>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={PageOne} />
          <Tab.Screen name="Settings" component={PageTwo} />
        </Tab.Navigator>
      </NavigationContainer>
    </StoreOne>
  );
}
