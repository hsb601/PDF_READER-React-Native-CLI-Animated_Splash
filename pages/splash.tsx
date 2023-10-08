/*
import React, { useEffect } from 'react';
import { WebView } from 'react-native-webview';
import {View,Image,StyleSheet }from 'react-native';

const GifBackground = ({ navigation }) => {
  const gifUrl = 'https://giphy.com/embed/Dwv8Wl7vI1JUuOektL';

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Intro');
    }, 5000);
  }, []);

  return (
  <View>
   <Image style={styles.cover} source={require('../assets/icon.png')} />
   </View>
  );
};
const styles = StyleSheet.create({
 cover: {
width:360,
height:360,
         alignSelf: 'center',

         alignItems: 'center',
         justifyContent: 'center',
          top: 0,
             marginTop: 180,
           shadowColor: '#000',
             shadowOffset: {
               width: 0,
               height: 1,
             },
             shadowOpacity: 0.2,
             shadowRadius: 1.41,


  },

});
export default GifBackground;
 */
import React, { useEffect } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
  Easing,
  runOnJS, // Add this import
} from 'react-native-reanimated';

export default function Splash({navigation}) {
  const scale = useSharedValue(1);

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const startAnimation = () => {
    // Define the animation properties
    const animationConfig = {
      duration: 1000, // 1 second for each zoom in/out
      easing: Easing.inOut(Easing.ease), // easing function
    };

    // Start the animation
    scale.value = withRepeat(
      withTiming(2, animationConfig, () => {
        // This callback runs when the animation completes
        runOnJS(onAnimationComplete)();
      }),
      -1,
      true
    );
  };

  const onAnimationComplete = () => {
    // Animation complete logic
    console.log('Animation completed');
  };


  useEffect(() => {
    startAnimation(); // Start the animation
        setTimeout(() => {
          navigation.navigate('Intro');
        }, 1100);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Image
        style={[styles.cover, animatedStyles]}
        source={require('../assets/icon.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  cover: {
    width: 200,
    height: 200,
  },
});
