import React, { Component } from 'react'
import { TouchableOpacity, View, ImageBackground, Image, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import constants from '../../constants'
import styles from './styles'
import Header from '../../components/header'
import GesturePassword from 'react-native-smart-gesture-password-angeloslex'

class patternScreen extends Component {
  constructor(props){
    super(props)
    this.state = {
      isWarning: false,
      message: 'Please enter your password',
      messageColor: '#A9A9A9',
      password: '',
      thumbnails: [],
    };
  }

  componentDidMount(){
    this._cachedPassword = ''
    this._verifiedPassword = ''
  }

  _onReset = () => {
    let isWarning = false
    let messageColor = '#A9A9A9'
    let message
    if (this.state.message === 'Verification failed, please try again.'){
      message = 'Please enter your password'
      this.setState({
        isWarning,
        //password,
        message,
        messageColor,
      })
    } else {
        this.setState({
          isWarning,
          messageColor,
      })
    }
  }

  _onFinish = (password) => {
    if (this._cachedPassword === '' && this._verifiedPassword === ''){
      this._cachedPassword = password
      let isWarning = false
      let message = 'Please verify your password'
      let messageColor = '#2456A6'
      this.setState({
          isWarning,
          message,
          messageColor,
      })
      return
    }
    if (this._cachedPassword !== '' && this._verifiedPassword === '') {
      if (password === this._cachedPassword){
        this._verifiedPassword = password
        let isWarning = false
        let message = 'Password verified'
        let messageColor = '#008000'
        this.setState({
          isWarning,
          message,
          messageColor,
          password
        })
      } else {
          let isWarning = true
          let message
          let messageColor = 'red'
          if (password.length < 4) {
              message = 'Need to link at least 4 points'
          }
          else {
              message = 'Verification failed, please try again.'
              this._cachedPassword = ''
              this._verifiedPassword = ''
          }
          this.setState({
              isWarning,
              password,
              message,
              messageColor,
          })
      }
    }
  }

  renderHeader = () => {
    return (
      <View style={{flex:1}}>
        <Header showLogo/>
        <View style={styles.headerTextContainer}>
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
          activeColor={'#2456A6'}
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
     )
  }
}
export default patternScreen