import React from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import RNExitApp from 'react-native-exit-app'
import constants from '../constants'

const header = (props) => {
  renderBottomContainer = () => {
    if (props.showLogo) {
      return (
        <View style={styles.bottomContainer}>
          <Image 
            style={styles.logo}
            source={constants.LOGO}
            resizeMode='contain'
          />
        </View>
      )
    } else return null
  }
   renderBody = () => {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={{flex: 1, alignItems: "flex-start"}}>
            <TouchableOpacity
              onPress={() => RNExitApp.exitApp()}
            >
              <Image
                source={constants.CLOSE_ICON}
                style={styles.closeIcon}
              />
            </TouchableOpacity>
           
          </View>
          
          <View style={{flex: 1, alignItems: "flex-end"}}>
            <Image
              source={constants.MIC_ICON}
              style={styles.micIcon}
            />
          </View>
        </View>
        {renderBottomContainer()}
      </View>
    )
  }

  return (
   renderBody()
  )
}

const styles = StyleSheet.create({

  container: {
    flex:1,
    flexDirection: 'column',
    // borderWidth: 1,
    // borderColor: 'red',
    width:'100%'
  },

  topContainer: {
    flexDirection: 'row',
  },

  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },

  logo: {
    width: 80,
    height: 30,
    margin: 5
  },

  closeIcon: {
    width: 18,
    height: 18,
    marginTop: 30,
    marginLeft: 30
  },

  micIcon: {
    width: 18,
    height: 25,
    marginTop: 30,
    marginRight: 30
  }
});

export default header
