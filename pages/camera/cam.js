import React, { Component } from 'react';

import { TouchableHighlight, Button, Text, Image, TextInput, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
//import Camera from 'react-native-camera';
import Menu from '../menu/menu';
import { Camera, Permissions } from 'expo';

export default class Cam extends React.Component{

    state = {
        hasCameraPermission: null,
        type: Camera.Constants.Type.back,
      };

    async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
           this.setState({ hasCameraPermission: status === 'granted' });
         
      }

    static navigationOptions = {
        drawerLabel: 'Camera',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../imgs/delete.png')}
                style={[styles.icon, { tintColor: tintColor }]}
            />
        ),
    };



render(){

    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
    return(
<View style={{ flex: 1 }}>

<Camera style={{ flex: 1 }} type={this.state.type} ref={ref => { this.camera = ref; }}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                flexDirection: 'row',
              }}>
              <TouchableOpacity
                style={{
                  flex: 0.1,
                  alignSelf: 'flex-end',
                  alignItems: 'center',
                }}
                onPress={() => {
                  this.setState({
                    type: this.state.type === Camera.Constants.Type.back
                      ? Camera.Constants.Type.front
                      : Camera.Constants.Type.back,
                  });
                }}>
                <Text
                  style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                  {' '}Flip{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </Camera>
<Button title="Take a pic" onPress={ async ()=>{

if (this.camera) {
    let photo = await this.camera.takePictureAsync();
    alert(photo.uri);
  }

}}></Button>

</View>


    );}
}

} 

const styles = StyleSheet.create({
 
    icon: {
        width: 24,
        height: 24,
  
  
    },
    page: {
        paddingTop:22
    },
    menu: {
        zIndex: 1,
        position: 'absolute',
        top: 50,
        left: 20
    }
    
  });