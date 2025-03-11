Handling Gestures and Animations in React Native #74

📌 What are the differences between Animated and react-native-reanimated?
From my experience, Animated is kinda like crendering 1 component at a time therefore it requires time and affect performance when you have large amount of animated component at a time. react-antive-reanimated is the library support rendering on the UI rather than working with the JavaScript code so it saves more time and more efficient.

📌 How does react-native-gesture-handler improve gesture performance?
When the app has so many tasks to proceed at the same time, using React Native handle gestures could fell laggy because the app is busy processing so many other tasks. To separate the workload, react-native-gesture-handler processes gestures faster on the native layer rather than running through the JavScript thread which could have to wait until other previous actions finish.
    
    
📌 When would you use gestures instead of buttons in a UI?
Some actions could be quicker to do by gesture rather than pressing the buttons such as: swiping between different photos, swiping left to come back to the previous page, and zooming camera. Buttons could be quicker for some actions like play or pause the video, like the video, or send the message, etc. So in my opinion, when the action is quick and precise such as send the message, the buttons are better.


📌 Why is InteractionManager.runAfterInteractions necessary?
React Native has a lot of background task to run therefore the app could be slowed down and lagged. InteractionManager show the loading animation to inform user that the data is loading and the information is loading at the background which is more efficient than processing the loading animation and loading data at the same time.