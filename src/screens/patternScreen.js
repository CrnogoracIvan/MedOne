import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import constants from '../constants'
import Header from '../components/header'
class patternScreen extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log('propsevi su: ', this.props.uri);
  }

  render(){
    return (
      <ImageBackground 
        style={styles.container} 
        source={{uri:this.props.uri}}
      >
        <LinearGradient
          locations={[0.9,1]}
          colors={['rgba(63, 107, 171, 0.3)', 'rgba(26, 43, 71, 0.7)']}
          style={styles.contentContainer}
        >
          <View style={{flex: 1}}>
            <Header showLogo/>
            <TouchableOpacity
              style={styles.buttonContainer}
            >
            <View style={styles.viewCont}>
              <Image 
                style={styles.button}
                source={constants.BUTTON}
              />
            </View>
             
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
  );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    backgroundColor : 'transparent',
  },
  contentContainer: {
    flex : 1,
    flexDirection: 'row',
    overflow:'visible',
    alignItems: 'center',
    alignSelf: 'stretch',
  },

  viewCont: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 230,
    height: 60,
    margin: 20,
    borderRadius: 10,
    backgroundColor: 'rgb(255,255,255)'
  },

  buttonContainer: {
    alignSelf: 'center',
  },

  button: {
    width: 200,
    height: 60,
  }
});
export default patternScreen