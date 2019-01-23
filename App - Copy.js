import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import Cam from './pages/camera/cam';
import Menu from './pages/menu/menu';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import NativeStore from './reducer/index';
import thunk from 'redux-thunk';
import { createStackNavigator, createAppContainer ,createDrawerNavigator} from "react-navigation";




const store = createStore(NativeStore, applyMiddleware(thunk));
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;


class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
      </View>
    );
  }
}


class HomePage extends React.Component {

  static navigationOptions = {
    title: 'Home Page1',
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerRight: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#000"
      />
    ),
    headerLeft: (
      <Button
        onPress={() => alert('This is a button!')}
        title="Info"
        color="#000"
      />
    )
  };
  render() {

    
    return (
      <Provider store={store}>
        <View>

          <Button
            title="Go to Cam"
            onPress={() => this.props.navigation.navigate('Campage')}
          />

          {/* <UserList sc="Ishaq" /> */}
          
          </View>
      </Provider>
      /*
      
      <View style={styles.container}> 
   <Text>Hello worlddd!</Text></View>
   <Provider store={store}>
        <UserList  sc="Isha"/>
        </Provider> */

    );
  }

}
const AppNavigator = createStackNavigator({
  Home: HomePage,
  Campage: Cam
},

  {
    initialRouteName: "Home"
  });

const AppContainer = createAppContainer(AppNavigator);

class App extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    return (
      <AppContainer />

    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
//export default createAppContainer(AppNavigator);
