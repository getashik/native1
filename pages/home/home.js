import React, { Component } from 'react';

import { Button, Text, Image, TextInput, View, StyleSheet, TouchableHighlight, Alert } from 'react-native';
import Menu from '../menu/menu';
import UserList from '../users/userList';
//import Camera from 'react-native-camera';

class Home extends Component {

    constructor(props) {
        super(props);

    }

    

    static navigationOptions = {
        drawerLabel: 'Home',
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

            <View style={[styles.container]}>


                <Menu {...this.props}/>
                {/* <View style={[styles.v1]}>
                    <TouchableHighlight onPress={() => this.props.navigation.toggleDrawer()} >
                        <Image source={require('../../imgs/menu.png')}
                            style={[styles.icon]}  />
                    </TouchableHighlight>
                </View> */}

                <View style={[styles.v2]}>
                    <Button title="Take Photo" onPress={() => this.takePhoto()}></Button>
                    <Button style={[styles.body]}
 onPress={() => this.takePhoto()}
                        title="Go to notificationsndd"
                    />
                </View>

                <View>
                    <UserList />
                </View>
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
        position: 'relative',
        zIndex: 0,
        paddingTop:20
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
    },
    icon: {
        width: 24,
        height: 24,


    },
    body: {
        zIndex: 0
    },
    v1: {
        zIndex: 1,
        position: 'absolute',
        top: 50,
        left: 20
    },
    v2: {
        zIndex: 0
    }
});

export default Home;