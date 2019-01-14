import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button, ListView, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { GetList } from '../actions/awsList';
import UserEntry from './userEntry';
import Row from './userRow'




class UserList extends React.Component {
	componentDidMount() {
		this.loadAwsUsers();
	}



	loadAwsUsers() {

		this.props.dispatch(GetList());
	}

	render() {
//<ActivityIndicator animating={this.state.loading} size="small"/>
		return (
			<View style={styles.container}>

				<UserEntry />
				
				<ListView
					dataSource={this.props.awsReducer.awsReducer}
					renderRow={(data) => <Row {...data}

					/>
					} />

				{/* {this.props.awsReducer.awsReducer.map((obj,i)=> ( 
					
					<TouchableOpacity  style={styles.test} key={i} onPress={()=> this.alertItem(obj)} >
					<Text style={styles.rowstyle}>{obj.userName}-{obj.email} </Text> 
					</TouchableOpacity>
					
					))} */}



				{/* <Button title="Load AWS Users-" onPress={()=>this.loadAwsUsers()}></Button> */}
			</View>

		);
	}

}



const styles = StyleSheet.create({
	container: {
		marginTop: 22,

		backgroundColor: '#fff',
		alignItems: 'stretch',
		justifyContent: 'center',

	},
	rowstyle: {

		paddingVertical: 8,
		paddingHorizontal: 4,
   marginBottom:1,
		flexDirection: 'row',
		backgroundColor: "#eee",

		borderColor: "#ccc"
	},
	test: {


	},
	separator: {
		flex: 1,
		height: StyleSheet.hairlineWidth,
		backgroundColor: '#8E8E8E',
		borderColor: "#000"
	}
});

function select(state) {
	return { awsReducer: state };
}

export default connect(select)(UserList);