import React, { Component } from 'react';

import { Button, Text,Image, TextInput, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
//import Camera from 'react-native-camera';

class MsgList extends Component {

    static navigationOptions = {
        drawerLabel: 'MsgList',
        drawerIcon: ({ tintColor }) => (
          <Image
            source={require('../../imgs/delete.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
    

      
    takePhoto() {
        Alert.alert(
            'Alert Title',
            'My Alert Msg',
            [
                { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
        )
    }

    takePicture() {
        const options = {};
        //options.location = ...
        this.camera.capture({metadata: options})
          .then((data) => console.log(data))
          .catch(err => console.error(err));
      }
    
    
   
    

    render() {
       
        return (
            <View style={styles.container}>
                <Button title="List MSG " onPress={() => this.takePhoto()}></Button>
                <Button
        onPress={() => this.props.navigation.navigate('DrawerOpen')}
        title="Go to notifications"
      />

                {/* <Camera
                    ref={(cam) => {
                        this.camera = cam;
                    }}
                    style={styles.preview}
                    aspect={Camera.constants.Aspect.fill}>
                    <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
                </Camera> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
    },
    preview: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center'
    },
    capture: {
      flex: 0,
      backgroundColor: '#fff',
      borderRadius: 5,
      color: '#000',
      padding: 10,
      margin: 40
    }
  });

export default MsgList;