import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import analytics from '@react-native-firebase/analytics';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import WebviewPage from './src/WebviewPage';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      {/* <View style={styles.container}> */}
      {/* <Text>Open up App.tsx to start working on your app!</Text> */}
      {/* <Button title='Firebase' onPress={async ()=>{
        await analytics().logEvent('test_react_native', {
          "App_type":"react-native"
        })
        console.log('trigger')
      }}></Button> */}
      {/* <Button title='Open webview'></Button>
      <StatusBar style="auto" /> */}
      {/* </View> */}
      <Stack.Navigator>
        <Stack.Screen
          name="home"
          component={Home}
          options={{ title: 'home' }}
        ></Stack.Screen>
        <Stack.Screen
          name="webview"
          component={WebviewPage}
          options={{
            title: 'webview',
            headerRight: () => (
              <Button
                title="trigger"
                onPress={() => {
                  // window.postMessage('firebase');
                }}
              ></Button>
            )
          }}
        ></Stack.Screen>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center'
//   }
// });
