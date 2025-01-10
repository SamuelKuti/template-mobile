import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View } from 'react-native';
import Header from './components/Header';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-blue-200">
        <Text className="text-blue-500 text-2xl text-center font-bold">This is a template app.</Text>
        <Header></Header>
        <StatusBar style="auto" />
    </View>
  );
}