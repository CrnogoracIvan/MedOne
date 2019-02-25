import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { RNCamera } from 'react-native-camera';
import constants from '../constants'

class cameraScreen extends Component {

  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.front}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={'We need your permission to use your camera phone'}
        >
          <View style={{flex: 1, flexDirection:'row'}}>
            <Image
              source={constants.CLOSE_ICON}
              style={styles.optionIcon}
            />
            <Image
              source={constants.MIC_ICON}
              style={styles.optionIcon}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity onPress={this.takePicture.bind(this)} style={styles.captureButtonContainer}>
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

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      Actions.patternScreen({uri:data.uri})
      console.log('data uri is: ', data.uri);
    }
  };
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
    flex: 0,
    alignSelf: 'center',
    margin: 20,
  },
  captureImage: {
    width: 100,
    height: 100
  },

  header: {
    flex: 1, 
    flexDirection:'row'
  },

  optionIcon: {
    width: 25,
    height: 25
  }
});
export default cameraScreen