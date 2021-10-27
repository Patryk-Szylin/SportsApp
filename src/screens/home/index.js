import React, { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { setStats } from '../../store/slices/stats';
import { getStats } from '../../store/slices/stats/thunks';

const Index = ({ navigation }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Calling a thunk which returns a promise so you can do .then if you wanted to
    dispatch(getStats());

    // Calling redux action
    // dispatch(setStats([{ id: 1 }, { id: 2 }]));
  }, [dispatch]);

  return (
    <View>
      <Text>Home Screen</Text>
      <Button title="Stats Screen" onPress={() => navigation.push('Stats')} />
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({});
