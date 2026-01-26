const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Your existing project configuration...

module.exports = withNativeWind(config, { input: './global.css' });
