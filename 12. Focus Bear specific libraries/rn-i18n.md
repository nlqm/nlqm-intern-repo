Implementing Localisation (i18n) with react-i18next #72

📌 How does react-i18next handle translations?
Based on the process I used to create the language switcher component in React Native, starting with create the resources object which stores the language translation data, then loading the language and save them in AsyncStorage into loadLanguage function, initialise i18n object to access the function and resources for translation data. Lastly is create the setLanguage function that allow users to change current language to other ones, save that choice and allow to change it dynamically. i18n also provides us fall back language option to set the default language to display in case that we missed adding translation or the translation is missing.

📌 What challenges arise when localising a React Native app?
The first problem is updating and maintaining the language resources is difficult could cause confusing and time consumption. Some languages are getting specifically longer after transalation could cause UI issues. Grammatically accurates in translation is another issue as well.

📌 How would you test localisation support in an app?
The method that I used is testing it manually on Expo to check or UI elements such as text alignment, layout or paragraph length issues. Another way I have thought but have not tried is using Jest to test the correction of the translation.