import React, {useContext, useState} from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <SafeAreaView>
      <View style={{backgroundColor: isDarkMode ? '#222222' : '#aaaaaa'}}>
        <Text style={{color: isDarkMode ? '#FFFFFF' : '#000000'}}>
          Hello World!
        </Text>
        <Button title={'Switch Theme'} onPress={toggleDarkMode} />
      </View>
    </SafeAreaView>
  );
};

export default App;
