export default {
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
}