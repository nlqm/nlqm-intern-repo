Introduction to Redux Toolkit #24
📌 When should you use Redux instead of useState?
I usually useState and do not know about Redux before this milestone. After researching and comparing, I think useState is more efficient for performance in general because it is a built-in function, it could handle simple and sufficient local state and state logics. Everything will get more complicated when the state is not local with complex state logic and I think that the time we need to use Redux.

Using Selectors in Redux Toolkit #23
📌 What are the benefits of using selectors instead of directly accessing state?
By using selector, it feels like we are pointing the right value that we want to access therefore the performance will be increase because of faster and more specific access to the particular value rather than vaguely searching through everything. Consistency, maintainability and updating also get easier because now we only need to update the selector not blindly finding the values everywhere to fix it. Utilizing selector could improve the reusability of the selector function.
