import React, { useEffect, useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTranslation } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";
import "../(tabs)/i18n";

const LanguageSwitcher: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState<string>(i18n.language);

  useEffect(() => {
    const loadLanguage = async () => {
      const savedLang = await AsyncStorage.getItem("language");
      if (savedLang) {
        i18n.changeLanguage(savedLang);
        setCurrentLanguage(savedLang);
      }
    };
    loadLanguage();
  }, []);

  const changeLanguage = async (lang: string) => {
    await AsyncStorage.setItem("language", lang);
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("welcome")}</Text>
      <Button title={t("changeLanguage") + " (EN)"} onPress={() => changeLanguage("en")} />
      <Button title={t("changeLanguage") + " (ES)"} onPress={() => changeLanguage("es")} />
      <Text style={styles.language}>current language: {currentLanguage.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
  language: {
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default LanguageSwitcher;
