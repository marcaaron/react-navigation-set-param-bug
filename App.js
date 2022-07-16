import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import {
  NavigationContainer,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Home = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const increasePage = () => {
    navigation.setParams({ page: (route?.params?.page || 0) + 1 });
  };

  return (
    <View>
      <Button title="Increase page" onPress={increasePage}></Button>
      <Text>Page: {route?.params?.page}</Text>
    </View>
  );
};

const RootStack = createStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <NavigationContainer
        linking={{
          config: {
            screens: {
              Home: {
                path: '',
                parse: {
                  page: Number,
                },
                stringify: {
                  page: String,
                },
              },
            },
          },
        }}>
        <RootStack.Navigator name="Main">
          <RootStack.Screen name="Home" component={Home} />
        </RootStack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
