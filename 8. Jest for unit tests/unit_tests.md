Introduction to Unit Testing with Jest #16
![first test result](image.png)

📌 Why is automated testing important in software development?
By using automated testing, software could be automatically checked before implementation. With simple changes, automated testing could quickly check the new updates and implement it right away, help the CI/CD process continuously and reduce waiting time. Automatically testing could also help us check the small problems and tackle them immediately before they become serious.

📌 What did you find challenging when writing your first Jest test?
I encounter the problem with exporting the function and importing within the test. The test file did not accept the import statement outside the module. After researching this error, I realize that Jest does not support ES module including import function by default. Because of that, I have to change to commonJS syntax to fix this problem by module exports and require syntax.
![Failed test run](image-1.png)

Testing React Components with Jest & React Testing Library #15
![Message component first task result](MessageComponent_TestResult.png)
![Message component - results after adding second task to check the click function](MessageComponent_TestResult2.png)

📌 What are the benefits of using React Testing Library instead of testing implementation details?
By using Jest & React Testing Library, it provides the accessibility for developers to specify which actions to be simulated which is useful to test the functionality of each component. Ignoring the minor UI problems while testing is another advantage, Jest and React Testing Library focus on problems related to the functions rather than stopping the test when the class name or state are wrong. Allowing developers to specify which part the test want to access such as specific labels, role names, or text content is the big benefit as well.


📌 What challenges did you encounter when simulating user interaction?
One of the disadvantages I encountered is knowing when to use fireEvent or userEvent. Despite understanding that fireEvent triggered the event instantly and userEvent allowed action delay to mimic user behaviour, sometimes it is hard to decide which should be used. Another problem of userEvent is calculating the amount of delay time is difficult while develope has to ensure that the time is resonable enough to mimic user interaction in real life. Mistyping the text is also another problem that I need to fix while writing test cases. Sometimes the test case just fails because I typed the wrong text compared to the text in the component. 