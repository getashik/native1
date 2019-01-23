import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import {createDrawerNavigator, DrawerActions} from 'react-navigation';
import {Icon, Header} from 'react-native-elements';


import Cam from '../camera/cam';


const Menu = createDrawerNavigator(
    {
     
      "Cam": { screen: Cam }
    },
    {
      drawerWidth: 300,
      drawerPosition: 'left',
      initialRouteName: 'Cam',
    }
  )



  const MenuContainer = () => {
    let pressMenu
    
    return(
      <React.Fragment>
        <Header
          backgroundColor="white"
          leftComponent={
            <Icon
              name="menu"
              onPress={() => {
                pressMenu.dispatch(DrawerActions.toggleDrawer())
                  }}
             />
          }
        />
        <Menu
           ref={navigatorRef => { pressMenu = navigatorRef}}
        />
      </React.Fragment>
    )
  }
  export default MenuContainer



//   export default class Det extends React.Component {
//     render() {
//       return (
//         <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//           <Text>Details Screen1111111</Text>
//         </View>
//       );
//     }
//   };