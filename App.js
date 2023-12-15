import React, {useState} from 'react';
import {SafeAreaView, Text, Button, View} from 'react-native';
import {ThemeContext} from './contexts/ThemeContext';
import HomeScreen from './components/HomeScreen/HomeScreen';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <ThemeContext.Provider value={isDarkMode}>
      <SafeAreaView>
        <HomeScreen />
        <Button
          title={'Switch Theme'}
          onPress={toggleDarkMode}
          style={{width: '50%'}}
        />
      </SafeAreaView>
    </ThemeContext.Provider>
  );
};

export default App;
