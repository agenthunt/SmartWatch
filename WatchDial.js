import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
 container: {
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: 'teal',
   height: 0.6 * width,
   borderRadius: 0.3 * width,
   width: 0.6 * width,
   borderColor:  'silver',
   borderWidth: 10
 },
 welcome: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
 instructions: {
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
 },
 time: {
   color: 'white',
   fontFamily: 'Roboto-Thin',
   fontSize: 70
 },
 day: {
   color: 'white',
   fontFamily: 'Roboto-Thin',
   fontSize: 18,
   marginBottom: 2
 },
 weather: {
   color: 'white',
   fontFamily: 'Roboto-Thin',
   fontSize: 18
 },
 horizontalLayout: {
   width: 150,
   flexDirection: 'row',
   justifyContent: 'space-between',
   alignItems: 'flex-end',
   marginBottom: 15
 },
 rotate90: {
  transform: [{ rotate: '-90deg' }],
  marginBottom: 4
}
});

export default class WatchDial extends Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={styles.horizontalLayout}>
          <Icon name="wifi" size={20} color="white" />
          <Icon name="microphone" size={30} color="white" />
          <Icon name="battery-half" size={17} color="white" />
        </View>
        <Text style={styles.time}>
          {this.props.time}
        </Text>
        <Text style={styles.day}>
          {this.props.day}
        </Text>
        <Text style={styles.weather}>
          {this.props.weather}
        </Text>
      </View>
    );
  }
}
