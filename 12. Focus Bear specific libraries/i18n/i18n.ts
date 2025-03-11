import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import AsyncStorage from "@react-native-async-storage/async-storage";

const resources = {
  en: { translation: { welcome: "Welcome", changeLanguage: "Change Language" } },
  es: { translation: { welcome: "Bienvenido", changeLanguage: "Cambiar Idioma" } },
};

const loadLanguage = async (): Promise<string> => {
  const savedLanguage = await AsyncStorage.getItem("language");
  return savedLanguage || "en";
};

loadLanguage().then((lang) => {
  i18n.use(initReactI18next).init({
    resources,
    lng: lang,
    fallbackLng: "en",
    interpolation: { escapeValue: false },
  });
});

export const setLanguage = async (language: string): Promise<void> => {
  await AsyncStorage.setItem("language", language);
  i18n.changeLanguage(language);
};

export default i18n;
