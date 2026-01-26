// module.exports = {
//   presets: ['module:@react-native/babel-preset'],
// };
// module.exports = {
//   presets: ['module:@react-native/babel-preset', 'nativewind/babel'],
//   plugins: ['react-native-reanimated/plugin'],
// };
module.exports = {
  presets: [
    ['module:@react-native/babel-preset', { jsxImportSource: 'nativewind' }],
    'nativewind/babel',
  ],
};
