import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('english');

  const languages = {
    english: 'Hello World!',
    polish: 'Witaj Świecie!',
    french: 'Bonjour le Monde!',
    german: 'Hallo Welt!',
    spanish: '¡Hola Mundo!',
    italian: 'Ciao Mondo!',
    russian: 'Привет, мир!',
  };

  const toggleLanguage = () => {
    const languageKeys = Object.keys(languages);
    const currentIndex = languageKeys.indexOf(currentLanguage);
    const nextIndex = (currentIndex + 1) % languageKeys.length;
    const nextLanguage = languageKeys[nextIndex];
    setCurrentLanguage(nextLanguage);
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
