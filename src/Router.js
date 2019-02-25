import React, { Component } from 'react'
import { Scene, Router, Actions } from 'react-native-router-flux'
import cameraScreen from './screens/cameraScreen'
import patternScreen from './screens/patternScreen'

class RouterComponent extends Component {
  constructor (props) {
    super(props)
  };

  // renderBackButton = () => {
  //   return (
  //     <TouchableOpacity
  //       onPress={() => {this.props.logOut()}}>
  //       <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft:18 }}>
  //         <Image
  //                 source={require('./assets/images/exit.png')}
  //                 resizeMode={'contain'}/>
  //       </View>
  //     </TouchableOpacity>
  //   );
  // };

  onBackPress () {
    if (Actions.state.index === 0) {
      return false
    }
    Actions.pop()
    return true
  }

  render () {
    return (
      <Router
        backAndroidHandler={this.onBackPress}
      >
        <Scene key='root'>
          <Scene
            hideNavBar
            initial
            key='cameraScreen'
            component={cameraScreen}
          />

          <Scene
            hideNavBar
            key='patternScreen'
            component={patternScreen}
          />
          </Scene>
      </Router>
    )
  };
}

export default RouterComponent
