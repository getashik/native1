import React from 'react';
import RootStack  from './pages/menu/router'
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import NativeStore from './reducer/index';
import thunk from 'redux-thunk';

const store = createStore(NativeStore, applyMiddleware(thunk));
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;


//export default RootStack;

class HomePage extends React.Component {

  render() {

    
    return (
      <Provider store={store}>
      <RootStack />
      </Provider>
     

    );
  }

}
//export default createAppContainer(RootStack);
export default HomePage;
