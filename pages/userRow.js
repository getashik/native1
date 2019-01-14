import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ListView, Image } from 'react-native';
import {DeleteUser} from "../actions/awsList";
import {connect} from 'react-redux';

 class Row extends React.Component {


	deleteItem() {

		this.props.dispatch(DeleteUser({id:this.props.id}));
	}

	render() {

		return (
			
				<TouchableOpacity style={styles.rowstyle} >
					<Text style={styles.txt} >{this.props.userName}-----{this.props.email}</Text>

                    <TouchableOpacity  onPress={() => this.deleteItem()} >
                    <Image source={require('../imgs/delete.png')}  style={styles.img} ></Image>
                    </TouchableOpacity>
				</TouchableOpacity>
		
		);
	}

}

function select(state) {
	return { awsReducer: state };
}

export default connect(select) (Row);
const styles = StyleSheet.create({
	container: {
		marginTop: 22,

		backgroundColor: '#fff',
		alignItems: 'stretch',
		justifyContent: 'center',

	},
	rowstyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
		paddingVertical: 10,
		paddingHorizontal: 4,
   marginBottom:1,
		flexDirection: 'row',
		backgroundColor: "#eee",

		borderColor: "#ccc"
	},
	img: {
        flexWrap: 'wrap',
        width: 25, height: 20,
        marginRight:10


    },
    txt: {
        flexWrap: 'wrap'


	},
	separator: {
		flex: 1,
		height: StyleSheet.hairlineWidth,
		backgroundColor: '#8E8E8E',
		borderColor: "#000"
	}
});

