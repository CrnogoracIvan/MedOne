import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, ImageBackground } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import constants from '../constants'

class patternScreen extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    console.log('propsevi su: ', this.props.uri);
  }

  render(){
    return (
      <ImageBackground style={styles.container} source={{uri:this.props.uri}}>
        <LinearGradient
        locations={[
         0.9,
         1
        ]}
          colors={[
            'rgba(63, 107, 171, 0.3)', 
            'rgba(26, 43, 71, 0.7)'
          ]}
          style={styles.contentContainer}
        >
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
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingVertical: 20,
    overflow:'visible',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
});
export default patternScreen