import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { List, Colors } from 'react-native-paper';

const Stats = ({ footballStats }) => {
  return (
    <View>
      {footballStats.map((stat, idx) => (
        <List.Item
          key={idx}
          title={`Stat #${idx}`}
          description="Barcelona vs Real Madrid"
          left={props => (
            <List.Icon color={Colors.blue500} {...props} icon="calendar" />
          )}
        />
      ))}
    </View>
  );
};

export default Stats;

const styles = StyleSheet.create({});
