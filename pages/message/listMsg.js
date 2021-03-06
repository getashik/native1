import React, { Component } from 'react';

import { TouchableHighlight, Button, Text, Image, TextInput, View, StyleSheet, TouchableOpacity, Alert } from 'react-native';
//import Camera from 'react-native-camera';
import Menu from '../menu/menu';
class MsgList extends Component {

    static navigationOptions = {
        drawerLabel: 'MsgList',
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../../imgs/delete.png')}
                style={[styles.icon, { tintColor: tintColor }]}
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
        this.camera.capture({ metadata: options })
            .then((data) => console.log(data))
            .catch(err => console.error(err));
    }





    render() {

        return (
            <View >



                

                <View style={[styles.page]}>

                    <Button title="List MSG " onPress={() => this.takePhoto()}></Button>
                    <Button
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        title="List MSGList MSGList MSGList MSG"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        title="List MSGList MSGList MSGList MSG"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        title="List MSGList MSGList MSGList MSG"
                    />
                    <Button
                        onPress={() => this.props.navigation.navigate('DrawerOpen')}
                        title="List MSGList MSGList MSGList MSG"
                    />

                </View>

                <Menu {...this.props}/>

                {/* <View style={[styles.menu]}>
                    <TouchableHighlight onPress={() => this.props.navigation.toggleDrawer()} >
                        <Image source={require('../../imgs/menu.png')}
                            style={[styles.icon]} />
                    </TouchableHighlight>
                </View> */}
               
               
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
 
    icon: {
        width: 24,
        height: 24,
  
  
    },
    page: {
        zIndex: 0
    },
    menu: {
        zIndex: 1,
        position: 'absolute',
        top: 50,
        left: 20
    }
    
  });

export default MsgList;