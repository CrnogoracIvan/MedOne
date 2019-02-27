import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, ImageBackground, Image, Alert, Dimensions, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import constants from '../constants'
import Header from '../components/header'
import GesturePassword from 'react-native-smart-gesture-password-angeloslex'
class patternScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      isWarning: false,
      message: 'Verify your gesture password',
      messageColor: '#A9A9A9',
      password: '',
      thumbnails: [],
  };
  this._cachedPassword = ''
  }

  componentDidMount(){
    console.log('propsevi su: ', this.props.uri);
    this._cachedPassword = '0125' //get cached gesture password
  }


_onReset = () => {
    let isWarning = false
    //let password = ''
    let message = 'Verify your gesture password'
    let messageColor = '#A9A9A9'
    this.setState({
        isWarning,
        //password,
        message,
        messageColor,
    })
}

_onFinish = (password) => {
    if (password === this._cachedPassword) {
        let isWarning = false
        let message = 'Verify succeed'
        let messageColor = '#00AAEF'
        this.setState({
            isWarning,
            password,
            message,
            messageColor,
        })
    }
    else {
        let isWarning = true
        let message
        let messageColor = 'red'
        if (password.length < 4) {
            message = 'Need to link at least 4 points'
        }
        else {
            message = 'Verify failed'
        }
        this.setState({
            isWarning,
            password,
            message,
            messageColor,
        })
    }
    Alert.alert('password is ' + password)
  }

  renderHeader = () => {
    return (
      <View style={{flex:1}}>
        <Header showLogo/>
        <View style={{height: 158, paddingBottom: 10, justifyContent: 'flex-end', alignItems: 'center',}}>
          <Text
            style={[styles.message, {color:this.state.messageColor}]}>{this.state.message}</Text>
        </View>
      </View>
    )
  }
  renderButton = () => {
    return (
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
    )
  }

  renderPattern(){
    return(
      <View style={styles.patternContainer}>
        <GesturePassword
          // style={{paddingTop: 50}}
          pointBackgroundColor={'#F4F4F4'}
          isWarning={this.state.isWarning}
          color={'#A9A9A9'}
          activeColor={'#00AAEF'}
          warningColor={'red'}
          warningDuration={1500}
          allowCross={false}
          onFinish={this._onFinish}
          onReset={this._onReset}
          topComponent={this.renderHeader()}
          bottomComponent={this.renderButton()}
        />  
      </View>
    )
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
            {this.renderPattern()}
            
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
  message:{
    fontFamily: '.HelveticaNeueInterface-MediumP4', 
    fontSize: 14, marginVertical: 6, 
  },
  patternContainer: {
    flex: 4,
    borderColor: 'blue',
    borderWidth: 1,
    // marginVertical: 10,
    // marginHorizontal: 30
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width: 200,
    height: 60,
  }
});
export default patternScreen