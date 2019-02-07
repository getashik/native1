import { DrawerNavigator, DrawerItems,createStackNavigator ,createDrawerNavigator,createAppContainer} from 'react-navigation'
import MenuContainer from './menu'
import Home from '../home/home';
import MsgList from '../message/listMsg';
import Camera from '../camera/cam';

const EntryStack = createStackNavigator(
  {
    UserList: {
      screen: Home,
    },
  },
  {
    headerMode: 'float', 
  }
);

 const RootStack1 = createStackNavigator({
    Home: {
      screen: Home
    },
    Signup: {
      screen: MsgList
    }
  });

const RootStack = createDrawerNavigator({
  
    
    MsgList: {
      screen: MsgList,
    },
    Camera:{
      screen:Camera
    },
    Home: {
      screen: Home,
    }
    
  });


  
  export default createAppContainer(RootStack);
