Understanding React Hooks: useEffect #21
📌 When should you use useEffect instead of handling logic inside event handlers?
useEffect is used to run codes when something changes specifically in the right time and automatically rather than putting everything inside an event handler which is only happen when you press the button.

📌 What happens if you don’t provide a dependency array?
Lack of dependency array will never stop running if do not provide the dependency array, if providing blank array will allow the page loads only once each time it web refresh, if adding the specific variable to the array, the useEffect only run when that variables change.

📌 How can improper use of useEffect cause performance issues?
Improper use of useEffect could be like lack of dependency array, therefore the useEffect always run and slow down the application. Because of that, programmer should use the right dependency array to prevent unnecessary rerenders.
