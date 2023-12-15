import React, {useRef} from 'react';
import {SafeAreaView, Text, ScrollView, Button} from 'react-native';

const App = () => {
  let array1 = Array(200).fill(0);
  const scrollViewRef = useRef(null);
  const click = () => {
    scrollViewRef.current.scrollTo({x: 0, y: 0, animated: true});
  };
  return (
    <SafeAreaView>
      <ScrollView ref={scrollViewRef}>
        {array1.map((v, index) => (
          <Text key={index}> {index + 1}. Hello World!</Text>
        ))}
        <Button onPress={click} title={'Scroll to top'} style={{margin: 200}} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
