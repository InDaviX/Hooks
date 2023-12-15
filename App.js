// App.js
import React from 'react';
import {SafeAreaView, Text, TouchableOpacity, StyleSheet} from 'react-native';
import useToggle from './customHooks/useToggle';

const App = () => {
  const [isOn, toggleIsOn] = useToggle(false);

  const backgroundColor = isOn ? '#f0f0f0' : '#333';
  const textColor = isOn ? '#000' : '#fff';

  return (
    <SafeAreaView style={[styles.container, {backgroundColor}]}>
      <Text style={[styles.text, {color: textColor}]}>
        {isOn ? 'ON' : 'OFF'}
      </Text>
      <TouchableOpacity
        style={[styles.button, {backgroundColor: isOn ? '#007BFF' : '#007BFF'}]}
        onPress={toggleIsOn}>
        <Text style={{color: '#fff', fontSize: 20}}>Toggle</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 34,
    marginBottom: 20,
  },
  button: {
    marginTop: 10,
    borderRadius: 20,
    paddingVertical: 15,
    paddingHorizontal: 40,
    alignItems: 'center',
  },
});

export default App;
