import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';

const App = () => {
  const [text, setText] = useState(0);

  useEffect(() => {
    console.log('The text has changed', text);
  }, [text]);

  useEffect(() => {
    console.log('Aplication started');
  }, []);

  return (
    <SafeAreaView>
      <Text onPress={() => setText(text + 1)}>{text}</Text>
    </SafeAreaView>
  );
};

export default App;
