import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('english');

  const languages = {
    english: 'Hello World!',
    polish: 'Witaj Świecie!',
  };

  const toggleLanguage = () => {
    setCurrentLanguage(prevLanguage =>
      prevLanguage === 'english' ? 'polish' : 'english',
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{languages[currentLanguage]}</Text>
      <Button
        title="Toggle Language"
        onPress={toggleLanguage}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  text: {
    fontSize: 20,
    marginBottom: 16,
  },
  button: {
    width: '50%',
  },
});

export default LanguageSwitcher;
