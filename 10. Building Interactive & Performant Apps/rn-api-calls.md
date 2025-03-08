Handling API Calls in React Native using Axios & Axios-Retry
#66

📌 Why is Axios preferred over fetch in some cases?
From the researchs, personally Axios requires higher learning curve compared to fetch(). However, in most cases, Axios is more preferred after understanding the use of it. Because Axios offers automati retries with axios-retry, request cancelation, timeout support and error handling automaticaly rather than manually error handling process like fetch().

📌 How does Axios-Retry improve network reliability?
Based on the Axios implementation by myself, I think by automatically retry the API calls when it failed because of network and server failures before giving up. THis could prevent the app crashes due to temporary network or server fails.

📌 How would you handle API failures gracefully in a React Native app?
- Letting user know that the data is fetching with loading bar or loading spinner to inform user the process status.

- Showing the error when it failed to fetch the data.
![Showing error state](image-1.png)

- Setting automatically fetch retries to prevent app crashes from contemporary network issues.
![Automatic retries to prevent contemporary crashes](image-2.png)

- Giving the retry button so users can try fetching manual by themselves besides automatic retries.
