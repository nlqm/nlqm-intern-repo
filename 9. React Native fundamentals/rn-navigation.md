Navigation in React Native using React Navigation #75

📌 What are the differences between stack, tab and drawer navigation?
- Stack navigation: Moves from one screen to another in the linear way by following step by step like you can only access Home page after Login.
- Tab navigation: switched between sections without losing the information when you go back to the previous tab like you can access to different section in the menu.
- Drawer navigation: opens the hidden navigation such as accessing settings menu screen.

📌 How does React Native handle screen transitions?
I think it depends on the type of devices that you use. For iOS devices, they are mostly slide in and out while android devices are fade in and out.

📌 How would you implemented deep linking in a React Native app?
From my research, deep linking mean sending the link containing the information about the specific spot that you want the receiver to see. By setting up the linking variable with config point to specific screen and userId with the app link as the prefix could point the app where to navigate when you share the link to others. 
Example: 
const shareLink = {
    prefixes: [{appDomain}, {appLink}],
    config: { screens: { Feed: 'Feed/:postId'}}
};