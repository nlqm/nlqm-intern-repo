Handling Deep Linking and Routing #71

📌 What are the benefits of deep linking in mobile apps?
From my research, by using deep linking, user could open specific screens in an app with the link therefore improving user exeprience. For example, sending the specific product link to your friends and they can go straight to that product by visit the link conveniently.

📌 How does React Navigation handle deep linking?
I read the instruction online and it starts with setting up a linking configuration by defining URL patterns for app screens, then the app listen for link when opening and send the data to the app. React Navigation will extract the screen parameters from the URL, take the information from the user's link and navigates accordingly. That is the rule but I do not know why I have tried my best but cannot do it.

📌 What challenges might arise when implementing deep linking?
My personal challenge is successfully setting up the deep linking in my react native app. Some common challenges that I have found out on forums are:
    - Android and iOS handle deep links in their own way so we need to config specifically for each operating system.
    - If the link requires authentication or permissions such as accessing someone's profile, the app must ask for users credentials log in before giving them access.
    - Handling expired or invalid links is another issue that need to be checked to prevent app crashes.
    - Handling deep link in different app states including the app is currently closed, the app is opening in the background. Those cases require different logically function to do.