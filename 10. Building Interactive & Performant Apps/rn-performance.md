Performance Optimization in React Native #68
📌 What are the most common performance issues in React Native?
Due to my research, some React Native performance issues could be caused by updating components too often cause unnecessary re-renders, doing complicated calculations, using images that have not optimized yet, and functions require a lot of time to load therefore freeze the web.

📌 How do useMemo and useCallback improve performance?
By using useMemo and useCallback, we could avoid recalculating complicated values unless the dependencies change and prevent unnecessary re-creation with memoized functions.

📌 What tools can you use to measure and monitor app performance?
From my personal experience, the tool I used was Sentry. It provides the details of the bugs and web performance with the screen recording which helps me understand the problems better.
