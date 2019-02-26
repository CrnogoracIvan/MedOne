import React from 'react'
import { StyleSheet, View, Image } from 'react-native'
import constants from '../constants'

const header = () => {
  const renderBody = () => {
    return (
      <View style={{flex: 1, flexDirection:'row'}}>
        <View style={{flex: 1, alignItems: "flex-start"}}>
          <Image
            source={constants.CLOSE_ICON}
            style={styles.optionIcon}
          />
        </View>
        
        <View style={{flex: 1, alignItems: "flex-end"}}>
          <Image
            source={constants.MIC_ICON}
            style={styles.optionIcon2}
          />
        </View>
      </View>
    )
  }

  return (
   renderBody()
  )
}

const styles = StyleSheet.create({
  optionIcon: {
    width: 18,
    height: 18,
    margin: 30
  },

  optionIcon2: {
    width: 18,
    height: 25,
    margin: 30
  }
});

export default header
