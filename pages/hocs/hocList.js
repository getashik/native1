import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ListView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { GetList } from '../../actions/awsList';

//import UserEntry from './userEntry';
//import Row from './userRow'

const drawList =(WrapperComponent,props) =>{

    class HOC extends React.Component{

        render(){

            return(
               
              
                  <WrapperComponent {...this.props}></WrapperComponent>
                 

              
                
            );
        }

    }

    return HOC;
}

function select(state) {
	return { awsReducer: state };
}

 export default drawList;