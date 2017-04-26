import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  PanResponder,
  Animated
} from 'react-native';

export default class example extends Component {
  componentWillMount() {
    this.pan = new Animated.ValueXY()

     this.cardPanResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {dx:this.pan.x, dy:this.pan.y},
      ]),
      onPanResponderRelease: (e, gesture) => console.log('Released', gesture.moveY), // e is the native event
    })
  }

  render() {
     const animatedStyle = {
      transform: [
        {translateX: this.pan.x},
        {translateY: this.pan.y},
      ],
    }
    return (
      <Animated.View
      {...this.cardPanResponder.panHandlers}
      style={styles.container}>
      </Animated.View>
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
});

AppRegistry.registerComponent('example', () => example);
