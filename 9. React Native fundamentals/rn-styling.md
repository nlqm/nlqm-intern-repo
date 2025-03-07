React Native Stylesheets vs CSSS-in-JS

📌 Why does React Native use camelCase instead of traditional CSS properties?
From my research and experience, React Native use camelCase for styling because it has to be consistent to JavaScript objects. Some people does mention that React Native styles will be applied directly to JavaScript objects therefore the styles should be in camelCase.

📌 What are the benefits of using styleSheet.create() over Inline Styles?
I have to say I have not used both of those styles, I personally prefer using TalwindCSS because my previous experience with it from web development. I did tried to used inline styles and it is really slow and confusing because of the styles differences between CSS and JS languages. Stylesheet.create() is better a litter bit with structured jsx but I like TailwindCSS in React Native all over other options.

📌 How would you handle different screen sizes in React Native?
I used TailwindCSS with react-native-responsive and have not had problems with different screen sizes. I did do some additional researchs to know what other options and they are: useWindowDimensions() from react native. THis can help the design automatically updates on dimension changes.