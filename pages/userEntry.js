import React, { Component } from 'react';

import { Button, Text, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import { PushUser } from '../actions/awsList';
import { connect } from 'react-redux';
import { red } from 'ansi-colors';


class UserEntry extends Component {

    constructor(props) {

        super(props);

        this.state = { isSubmit: true };

    }

   validateEmail(t){
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
    if(t==""){
        this.setState({emailVal: ""});
    }
     else if(reg.test(t)){
       this.setState({emailVal: style.success});
     }else{
        this.setState({emailVal: style.error});
     }
   }

    postUser() {

        this.props.dispatch(PushUser({ name: this.refs.userName._lastNativeText, email: this.refs.email._lastNativeText }));
        this.refs.userName.clear();
        this.refs.email.clear();
        // this.refs.userName._lastNativeText=123;
    }

    render() {

        return (
            <View>
                <TextInput ref="userName" placeholder="Enter name" style={style.inputFld} onChangeText={(t) => {
                    this.setState({
                        isSubmit: t.length?false:true
                    })
                }}>
                
                </TextInput>
                <TextInput ref="email" placeholder="Email" style={[style.inputFld, this.state.emailVal]} 
                 onChangeText={(t)=> this.validateEmail(t)}

                >
                </TextInput>
                
                {/* <TouchableOpacity disabled={this.state.isSubmit}  onPress={()=>this.postUser()} > 
        <Text> Add....</Text>
        </TouchableOpacity> */}
<TouchableOpacity onPress={() => this.postUser()}>
<Text >Add...</Text>
                {/* <Button title="Add.." disabled={this.state.isSubmit}  ></Button> */}
                </TouchableOpacity>
            </View>
        );


    }

}

const style = StyleSheet.create({
    inputFld: {
        height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, marginHorizontal: 2, padding: 3
    },
    error: {
        borderColor: "red"
    },
    success: {
        borderColor: "green"
    }
});

function select(state) {
    return { awsReducer: state };
}

export default connect(select)(UserEntry);