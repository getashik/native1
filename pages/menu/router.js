import { createStackNavigator ,createDrawerNavigator,createAppContainer} from 'react-navigation'
import MenuContainer from './menu'
import Camera from '../camera/cam';
import MsgList from '../message/listMsg';

const EntryStack = createStackNavigator(
  {
    UserList: {
      screen: Camera,
    },
  },
  {
    headerMode: 'float', 
  }
);

 const RootStack1 = createStackNavigator({
    Home: {
      screen: Camera
    },
    Signup: {
      screen: MsgList
    }
  });
// export const RootStack = createStackNavigator(
//   {
//     EntryStack: { screen: EntryStack },
//     MenuStack: { screen: MenuContainer },
//   },
//   {
//     headerMode: 'none',
//     initialRouteName: 'MenuStack',
//   }
// )

const RootStack = createDrawerNavigator({
    Home: {
      screen: Camera,
    },
    MsgList: {
      screen: MsgList,
    },
  });

  
  export default createAppContainer(RootStack);
