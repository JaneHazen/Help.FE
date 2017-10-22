import PropTypes from 'prop-types';

import React, { Component } from 'react'
import {
  View,
   Modal,
   TouchableHighlight,
  StyleSheet,
  Dimensions,
  Text,
  Image,
  NavigatorIOS
} from 'react-native'
import MapView from 'react-native-maps'

// user defined scenes, components, and services


const { width, height } = Dimensions.get('window')
const SCREEN_WIDTH = width
const SCREEN_HEIGHT = height
const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.032
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO

class Thisismap extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }


  render() {
  const styles = StyleSheet.create({
  container: {
     position: 'relative',
     height: SCREEN_HEIGHT / 2,
     justifyContent: 'flex-end',
     alignItems: 'stretch',
  },
  navBar: {
    flexDirection: 'row',
    position: 'absolute',
    justifyContent:'flex-start',
    top: 0,
    height: 50,
    width: width,
    backgroundColor: '#fcfcfc',
  },
  map: {
     left: 0,
     right: 0,
     top: 50,
     bottom: 0,
     position: 'absolute'
  },
  radius: {
     height: 40,
     width: 40,
     borderRadius: 50 / 2,
     overflow: 'hidden',
     backgroundColor: 'rgba(0,122,255,0.1)',
     borderWidth: 1,
     borderColor: 'rgba(0,122,255,0.3)',
     alignItems: 'center',
     justifyContent: 'center'
  },
  marker: {
     height: 15,
     width: 15,
     borderWidth: 2,
     borderColor: 'black',
     borderRadius: 20 / 1,
     // overflow: 'hidden',
     backgroundColor: 'blue'
  },
  placesContainer: {
     backgroundColor: 'transparent',
     alignItems: 'stretch'
  },
  placesList: {
     backgroundColor: 'white',
     height: 150,
     paddingTop: 8.5,
     borderRadius: 20,
  },
  nearby: {
     marginLeft: 15,
     marginBottom: 18.5,
     // color: '#f0f'
  }
})
    return (
      <View style={styles.container}>

        <View style= {styles.navBar}>

          <Image
                    style={{width: 55, height: 25, top: 10, alignItems: 'flex-end', alignSelf: 'center'}}
                    source={{uri: 'https://i.imgur.com/iQCK84M.png'}}
          />
          <View style={{width: 55, height: 25, top: 10, alignItems:'flex-end', alignSelf: 'center'}}>
          </View>
          <View style={{width: 55, height: 25, top: 10, alignItems:'flex-end', alignSelf: 'center'}}>
          </View>
          <Image
                    style={{width: 55, height: 25, top: 10, alignItems: 'flex-end', alignSelf: 'center'}}
                    source={{uri: 'https://i.imgur.com/6mK9NPz.png'}}
          />

        </View>


          <MapView
          style={styles.map}
          initialRegion={{
            latitude: 37.3292,
            longitude: -121.9061,
            latitudeDelta: LATITUDE_DELTA,
            longitudeDelta: LONGITUDE_DELTA,
          }}
          >


          <MapView.Marker
            coordinate={{longitude: -121.892107, latitude: 37.343341 }}>


              <View>
                <Modal
                    animationType="none"
                    transparent={true}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {alert("Modal has been closed.")}}
                    >
              <View style={{marginTop: 80, marginLeft: 270}}>
              <View>
                <Text style={{fontSize:12, fontWeight: 'bold'}}>Salvation Army</Text>

              <TouchableHighlight onPress={() => {
              this.setModalVisible(!this.state.modalVisible)
              }}>
                <Text style={{fontSize:8}}>Hide Address</Text>
              </TouchableHighlight>

          </View>
         </View>
        </Modal>


                  <TouchableHighlight onPress={() => {
                        this.setModalVisible(!this.state.modalVisible)
                        }}>
                  <Image
                      style={{width: 15, height: 15}}
                      source={{uri: 'https://i.imgur.com/zjV3YIL.png'}}
                      />

                  </TouchableHighlight>

                </View>
            </MapView.Marker>




          <MapView.Marker
            coordinate={{longitude: -121.907960, latitude: 37.320337 }}>
              <View>
                  <Image
                    style={{width: 15, height: 15}}
                    source={{uri: 'https://i.imgur.com/zjV3YIL.png'}}
                  />
              </View>
          </MapView.Marker>


          <MapView.Marker
            coordinate={{longitude: -121.919007, latitude: 37.336594 }}>
              <View>
                  <Image
                    style={{width: 15, height: 15}}
                    source={{uri: 'https://i.imgur.com/zjV3YIL.png'}}
                  />
              </View>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{longitude: -121.892796, latitude: 37.327639 }}>
              <View>
                  <Image
                    style={{width: 25, height: 25}}
                    source={{uri: 'https://i.imgur.com/IWkx62m.png'}}
                  />
              </View>
          </MapView.Marker>

          <MapView.Marker
            coordinate={{longitude: -121.915112, latitude: 37.324807 }}>
              <View>
                  <Image
                    style={{width: 25, height: 25}}
                    source={{uri: 'https://i.imgur.com/IWkx62m.png'}}
                  />
              </View>
          </MapView.Marker>


          <MapView.Marker
            coordinate={{longitude: -121.9058, latitude: 37.3294 }}>
                  <View style={styles.radius}>
                     <View style={styles.marker} />
                  </View>
          </MapView.Marker>
        </MapView>




      </View>
    );
  }
}

class MyScene extends Component {
  static propTypes = {
    navigator: PropTypes.object.isRequired,
  }

  // _onForward = () => {
  //   this.props.navigator.push({
  //     title: 'Scene ' + nextIndex,
  //   });
  // }

  render() {
    return (
      <View>
        <Text>Current Scene: { "Help." }</Text>
          <Text>Tap me to load the next scene</Text>
      </View>
    )
  }
}


export default Thisismap;

