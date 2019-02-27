import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { RNCamera } from 'react-native-camera';
import Spinner from 'react-native-loading-spinner-overlay'
import constants from '../../constants'
import styles from './styles'
import Header from '../../components/header'

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
          permissionDialogMessage={'MedOne need permission to use your phone camera'}
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
      )
    }
  }
export default cameraScreen