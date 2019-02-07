import React from 'react';
import { StyleSheet, TouchableHighlight, View, Image } from 'react-native';
import { createDrawerNavigator, DrawerActions } from 'react-navigation';
import { Icon, Header } from 'react-native-elements';




const styles = StyleSheet.create({
 
  icon: {
      width: 24,
      height: 24,


  },
 
  menu: {
      zIndex: 1,
      position: 'absolute',
      top: 40,
      left: 10,
      backgroundColor:'#fff',
      padding:5,
      borderRadius:20
  }
  
});



export default (nav)=>{

  //console.log(a);

  
    return (
      <View style={[styles.menu]}>
        <TouchableHighlight onPress={() => nav.navigation.toggleDrawer()} >
          <Image source={require('../../imgs/menu.png')}
            style={[styles.icon]} />
        </TouchableHighlight>
      </View>
    );
  
};