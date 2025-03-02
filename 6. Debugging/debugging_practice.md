Practise React Debugging in a Test Repo #30

📌 What was the issue?
The issue appeared in the count function. I modified it to create the issue while I code it as
function increase() {
setCount(count + 1);
setCount(count + 1);
}
The results did not change because each time I call the setCount it was the old value so it did not stack and show the right result. I updated them from setCount(count + 1) to setCount( prevCount => prevCount + 1) and it fixed the problem. Another bug is I forgot to add the dependency array with in useEffect, useMemo and useCallBack therefore they did not rerender when the value changed.

📌 What debugging method did you use?
I turn on the console of the browser and inspect and variables values to understand which step is wrong. I also fixed the code in VSCode and updated it immediately to find which part caused the problem.

📌 How did you resolve the problem?
If the code has syntax bugs, I will copy the code out and rewrite to inspect which part cause the problems. IF its about logics, use console.log, observe the console tab in Chrome Dev Tool with setting suitable breakpoint to fix the logic issues.
