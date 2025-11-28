import { AppRegistry } from 'react-native';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';
import { name as appName } from './app.json';
import './global.css';

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center' }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Text style={{ fontSize: 36, fontWeight: 'bold', color: '#2563eb' }}>
        Super App
      </Text>
      <Text style={{ fontSize: 16, color: '#4b5563', marginTop: 12 }}>
        Instagram + Zomato + Blinkit + Amazon + Blogs + Twitter
      </Text>
      <Text style={{ marginTop: 30, fontSize: 20, color: 'green' }}>
        IT WORKS 100%!
      </Text>
    </View>
  );
};

AppRegistry.registerComponent(appName, () => App);