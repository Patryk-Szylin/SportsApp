import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import Stats from './components/Stats';

const Index = () => {
  const footballStats = useSelector(rootState => rootState.stats.footballStats);

  return (
    <View>
      <Text>Stats Screen</Text>
      <Stats footballStats={footballStats} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
