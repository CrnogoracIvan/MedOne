import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View, ImageBackground, Image } from 'react-native'
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


  renderPattern(){
    return(
      <View style={styles.patternContainer}>

        <View style={styles.patterRowContainer}>
          <View style={styles.patternItemContainer}>
            <Image 
              style={styles.patternImage}
              source={constants.PATERN}
              resizeMode='contain'
            />
          </View>
          <View style={styles.patternItemContainer}>
            <Image 
              style={styles.patternImage}
              source={constants.PATERN}
            />
          </View>
          <View style={styles.patternItemContainer}>
            <Image 
              style={styles.patternImage}
              source={constants.PATERN}
            />
          </View>
        </View>

        <View style={styles.patterRowContainer}>
          <View style={styles.patternItemContainer}>
            <Image 
              style={styles.patternImage}
              source={constants.PATERN}
              resizeMode='contain'
            />
          </View>
          <View style={styles.patternItemContainer}>
            <Image 
              style={styles.patternImage}
              source={constants.PATERN}
            />
          </View>
          <View style={styles.patternItemContainer}>
            <Image 
              style={styles.patternImage}
              source={constants.PATERN}
            />
          </View>
        </View>

        <View style={styles.patterRowContainer}>
          <View style={styles.patternItemContainer}>
            <Image 
              style={styles.patternImage}
              source={constants.PATERN}
              resizeMode='contain'
            />
          </View>
          <View style={styles.patternItemContainer}>
            <Image 
              style={styles.patternImage}
              source={constants.PATERN}
            />
          </View>
          <View style={styles.patternItemContainer}>
            <Image 
              style={styles.patternImage}
              source={constants.PATERN}
            />
          </View>
        </View>
        
        
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
            <Header showLogo/>
            {this.renderPattern()}
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


  patternContainer: {
    flex: 2,
    marginVertical: 10,
    marginHorizontal: 30
  },
  patterRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  patternItemContainer: {
    // borderColor: 'yellow',
    // borderWidth: 1,
    margin:10
  },
  patternImage: {
    width: 60,
    height: 60
  },

  buttonContainer: {
    flex: 1,
    alignSelf: 'center',
  },
  button: {
    width: 200,
    height: 60,
  }
});
export default patternScreen