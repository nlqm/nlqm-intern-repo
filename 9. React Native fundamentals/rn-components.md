Understanding React Native components vs React components #77

📌 What are the key differences between <View> and <div>?
View in React Native is used to map to a view of iOS or Android device screen while div is rendered for HTML web page. Their default flex direction are different as well: React Native will flex in column by default while React default flex direction is row. The big difference between these two are pseudo classes support: React Native does not support pseudo classes while React is fully support it with CSS styling. Fundamentally, those 2 are designer for different environment, 1 is for mobile optimization with touch gestures while other is for web interactions.

📌 How does StyleSheet.create() improve performance compared to inline style?
I does not used these 2 methods so I am not sure about the performance differences. I did try create the app and compare and the differences based on my experience are: StyleSheet support style reusability while inline style need more time to load and cannot be reused and increase duplication.

📌 Why doesn't React Native use className like React web?
They actually do! After installing NativeWind to be able to use TailwindCSS within React Native project! I did included some images within this React Native fundamental folder. NativeWind is the styling libraries and this is the website I use for installation: https://www.nativewind.dev/getting-started/installation 
To answer the original question, React Native does not support traditional CSS so it avoid using className component.