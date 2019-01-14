
import {  ListView } from 'react-native';
export const awsReducer = (state=[{userName:"Default user",email:"default email"}],action) => {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    switch(action.type){

        case "GETAWSLIST":
         return ds.cloneWithRows(Object.assign([],action.payLoad));
        break;
        default:
        return ds.cloneWithRows(state);
       

    }
}