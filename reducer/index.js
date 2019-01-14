import {awsReducer} from "./awsList";
import {combineReducers} from "redux";
const NativeStore = combineReducers({ awsReducer});
export default NativeStore;