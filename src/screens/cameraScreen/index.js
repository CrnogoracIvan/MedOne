import React, { Component } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { RNCamera } from 'react-native-camera';
import Spinner from 'react-native-loading-spinner-overlay'
import constants from '../../constants'
import styles from './styles'
import Header from '../../components/header'
import OpenCV from '../../nativeModules/openCv'
import base64 from 'base64-js'

let ws

class cameraScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      messageText: 'take a picture',
      spinnerVisible: false,
      photoAsBase64: {
        content: '',
        isPhotoPreview: false,
        photoPath: '',
      },
    }
  }

  componentDidMount () {
  }

  checkForBlurryImage(imageAsBase64) {
    return new Promise((resolve, reject) => {
      if (Platform.OS === 'android') {
        OpenCV.checkForBlurryImage(imageAsBase64, error => {
          // error handling
        }, msg => {
          resolve(msg);
        });
      } else {
        OpenCV.checkForBlurryImage(imageAsBase64, (error, dataArray) => {
          resolve(dataArray[0]);
        });
      }
    });
  }

  proceedWithCheckingBlurryImage() {
    const { content, photoPath } = this.state.photoAsBase64;

    this.checkForBlurryImage(content).then(blurryPhoto => {
      if (blurryPhoto) {
        this.setState({messageText: 'image is blured'})      
        return this.repeatPhoto();
      }
      this.setState({ photoAsBase64: { ...this.state.photoAsBase64, isPhotoPreview: true, photoPath }, messageText: 'image is ok' });
    }).catch(err => {
      console.log('err', err)
    });
  }

  async takePicture() {
    if (this.camera) {
      const options = { quality: 0.5, base64: true };
      const data = await this.camera.takePictureAsync(options);
      this.setState({
        ...this.state,
        photoAsBase64: { content: data.base64, isPhotoPreview: false, photoPath: data.uri },
      });

      let byteArray = await base64.toByteArray(data.base64)
      // console.log('******byteArray je: ', byteArray)
      this.proceedWithCheckingBlurryImage();
      ws = new WebSocket('ws://81.218.139.160:3001/frames')
      ws.onopen = (response) => {
        console.log('*****on open response is: ', response)
        ws.send (byteArray)
        ws.onmessage = (e) => {
          // a message was received
          console.log('****onMessage: ', e.data);
        };
      }
      ws.onmessage = (e) => {
        // a message was received
        console.log('****onMessage: ', e.data);
      };
      
      ws.onerror = (e) => {
        // an error occurred
        console.log('****onError: ',e.message);
      };
      
      ws.onclose = (e) => {
        // connection closed
        console.log('****onClose: ',e.code, e.reason);
      };
      // let byteArray = base64.toByteArray(data.base64)
      // console.log('******byteArray je: ', byteArray)
      // this.proceedWithCheckingBlurryImage();
    }
  }

  repeatPhoto() {
    this.setState({
      ...this.state,
      photoAsBase64: {
        content: '',
        isPhotoPreview: false,
        photoPath: '',
      },
    });
  }

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
              <Text style={styles.text}>{this.state.messageText}</Text>             
              {/* <Text style={styles.text}>יאמו תזמה הנפים</Text> */}
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