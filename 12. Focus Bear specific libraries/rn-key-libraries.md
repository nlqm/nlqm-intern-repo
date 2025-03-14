Understanding Key Libraries Used in Focus Bear #69

📌 What is the purpose of Redux-Persist, and why is it useful?
From my research, Redux Persist helps store data locally with AsyncStorage so the app still save the current state and users do not lose their current flow if they exit the app and come back. Therefore it can also restore user preferences, cached data and authentication and improve app performance without unnecessary API calls.

📌 How does react-native-background-fetch differ from a normal timer?
From my understanding, react-native-background-fetch still keeping the scheduled tasks running in the background if users close the app while setInternal tasks may be paused by the operating system when the apps run in the background. In general, react-native-background-fetch is more reliable than timers because it follows the operation system rules for background operation therefore it could avoid task pausing from setInternal.

📌 Why does Focus Bear use Auth0 instead of handling authentication manually?
Comparing to manually setting up authentication rules, hashing passwords, saving user and administration credentials with high chances of security risks, Auth0 help us managing logins, and security by offering secure login with Google or Apple accounts, handle passwords resets, and multi-factor authentication which is more time efficient compared to building an authentication system from scratch.

📌 How does PostHog help improve the user experience in Focus Bear?
By help us tracking user activities in the app, PostHog can collect the user information, analysis and let us know the feature user engagement rate therefore we know which features are engaging and which do not. PostHog also allow us to compare different UI desgin with A/B testing and find the appropriate option. Compared to Sentry, PostDog is more about user data analystics side while Sentry is focus more about technical issues.

📌 What’s the difference between Sentry and PostHog, and when would you use each?
From my personal view, Sentry is more about errors and crashes tracking with PostHog focus about user behavior and analytics tracking. Sentry focus more about technical side such as debugging issues and app performance problems while PostHog paays attention to user data analyseand feature engagement tracking.

📌 How does react-native-localize work, and how does it interact with i18next?
react-native-localize will detect and locate the language, timezone and region of the device that the user is currently using and i18next will base on those data to loads the suitable default language. With this settings, if the user switch to different laanguage, react-native-localize can recognise it and i18next can automatically update the app's language based on their change as well.

📌 If you had to remove one library and replace it with an alternative, which one would you choose and why?
I did try Appwrite and Firebase Authentication before. Appwrite provides the large amount of login feature variations which could be helpful. Firebase Authentication is another good option but its more tightly integrated with Google system which could be limited sometimes if we want to access to different platform.