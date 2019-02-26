import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { RNCamera } from 'react-native-camera';
import Spinner from 'react-native-loading-spinner-overlay'
import constants from '../constants'
import Header from '../components/header'

class cameraScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      spinnerVisible: false
    }
  }

  takePicture = async function() {
    if (this.camera) {
      this.setState({spinnerVisible: true})
      const options = { quality: 1, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.setState({spinnerVisible: false})      
      Actions.patternScreen({uri:data.uri})
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Spinner
          visible={this.state.spinnerVisible}
        />
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'MedOne need permission to use your camera phone'}
          style={styles.preview}
        >
          <Header />
          <View style={styles.captureButtonContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>יאמו תזמה הנפים</Text>
            </View>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.touchableButtonContainer}>
              <Image
                source={constants.CAPTURE_ICON}
                style={styles.captureImage}
              />
            </TouchableOpacity>
          </View>
        </RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },

  captureButtonContainer: { 
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.9)', 
    width: '100%', 
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35 
  },

  textContainer: {
    marginTop: 20
  },

  text: {
    fontSize: 25,
    color: 'rgb(0, 0, 0)'
  },

  touchableButtonContainer: {
    flex: 0,
    alignSelf: 'center',
    margin: 20,
  },
  captureImage: {
    width: 100,
    height: 100
  },
});
export default cameraScreen