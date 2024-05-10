// In App.js in a new project

import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { WebView } from 'react-native-webview'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
       <Button
          title="Go to Details"
          onPress={() => navigation.navigate('Details')}
        />
    </View>
  );
}

function DetailsScreen({navigation}) {
  return (
 <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <Text>Details Screen</Text>
       <Button
         title="Go to Details... again"
         onPress={() => navigation.push('Details')}
       />
         <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
         <Button title="Go back" onPress={() => navigation.goBack()} />
         <Button
             title="Go back to first screen in stack"
             onPress={() => navigation.popToTop()}
           />
          <Button
                    title="debugger-button"
                    onPress={() =>{
                        console.log('test')
                        debugger

                    }}
                  />
     </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
     <WebView
          source={{ html: '<!DOCTYPE html><html><body><script src="http://localhost:8097"></script></body></html>' }}
          originWhitelist={['*']}
        />
    </NavigationContainer>
  );
}
export default App;