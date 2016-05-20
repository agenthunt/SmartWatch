import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View
} from 'react-native';
import {getTime, getDay} from './utils';
import WatchDial from './WatchDial';
export default class SmartWatch extends Component {
  constructor(){
    super();
    this.state = {
      time: getTime(),
      day: getDay()
    };
    setInterval(()=> {
      this.setState({
        time: getTime(),
        day: getDay()
      });
    }, 60 * 1000)
  }
 render() {
   return (
     <View style={styles.container}>
       <WatchDial time={this.state.time} day={this.state.day}
         weather={'41\u00B0C, SUNNY'}/>
     </View>
   );
 }
}

const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center',
   backgroundColor: '#F5FCFF',
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
});
