Understanding React Hooks: useEffect #21
📌 When should you use useEffect instead of handling logic inside event handlers?
useEffect is used to run codes when something changes specifically in the right time and automatically rather than putting everything inside an event handler which is only happen when you press the button.

📌 What happens if you don’t provide a dependency array?
Lack of dependency array will never stop running if do not provide the dependency array, if providing blank array will allow the page loads only once each time it web refresh, if adding the specific variable to the array, the useEffect only run when that variables change.

📌 How can improper use of useEffect cause performance issues?
Improper use of useEffect could be like lack of dependency array, therefore the useEffect always run and slow down the application. Because of that, programmer should use the right dependency array to prevent unnecessary rerenders.

Optimizing Performance with useMemo #20
📌How does useMemo improve performance?
When you have to repeat the complicated calculation, useMemo saves the results, prevents rerender or recalculate expensive calculations all the time therefore reducing wasted renders, calculations and improving performance.

📌 When should you avoid using useMemo?
Some cases that we should avoid using useMemo are: the calculations are not to complicated such as 3+1, the results do not require to remember or the values change every time such as the count down clock. Those cases should avoid using useMemo

📌 What happens if you remove useMemo from your implementation?
IF I remove useMemo from my implementation, the calculation will be redo every render which is not necessary. For example, there are 5 different methods in the app. Without useMemo, the complicated calculation is still triggered every time other methods get click which is not ideal and slow down performance.

Preventing Unnecessary Renders with useCallback #19
📌 What problem does useCallback solve?
useCallBack is used to prevent function recreation on every renders therefore optimizing child components and increasing application performance. useCallBack can also combine with React.memo to pass functions as props to be memoized.

📌 How does useCallback work differently from useMemo?
These 2 are quite similar but requiring different type of inputs. useMemo is allowed for a computed values only for complicated calculations, while useCallBack is used to store method such as passing functions as props to child components.

📌 When would useCallback not be useful?
There are some cases that useCallBack is unnecessary such as the functions are not required to passed to child components, the functions is simple, and the functions is updated regularly.
