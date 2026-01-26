import React, {useEffect, useRef} from 'react';
import {Animated, StyleSheet, Text, View, Image} from 'react-native';

type Props = {
  onFinish?: () => void;
};

export default function SplashScreen({onFinish}: Props) {
  const scale = useRef(new Animated.Value(0.7)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.parallel([
        Animated.timing(scale, {
          toValue: 1.05,
          duration: 600,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 600,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(scale, {
        toValue: 0.95,
        duration: 260,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 80,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start(() => {
      if (onFinish) onFinish();
    });
  }, [scale, opacity, onFinish]);

  return (
    <View style={styles.container} pointerEvents="none">
      <Animated.View
        style={[
          styles.logoContainer,
          {transform: [{scale}], opacity: opacity},
        ]}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.logoImage}
          resizeMode="contain"
        />
        {/* <Text style={styles.logoTextFallback}>Codeavour</Text> */}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    padding: 20,
    borderRadius: 12,
  },
  logoImage: {
    width: 240,
    height: 64,
    marginBottom: 8,
  },
  logoTextFallback: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '700',
    letterSpacing: 1,
  },
});
