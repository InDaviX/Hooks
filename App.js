import React, {useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

const App = () => {
  const [text, setText] = useState('Cheloł łord!');
  return (
    <SafeAreaView>
      <Text onPress={() => setText('Hello, World!')}>{text}</Text>
    </SafeAreaView>
  );
};

export default App;
