📌 Why are PRs important in a team workflow?

- Inform others within the team about the work process to aware of the changes and easier. By using pull requests, developers can share and request review from their co workers and track the status of their work by yourself and with others. Leaderr, managers and supervisors could easily track the team or specific process via PRs.

📌 What makes a well-structured PR?

- It should provide an overview of the changes that being committed such as including name and description following organisation's standard templates if required.

📌 What did you learn from reviewing an open-source PR?

- There are many ways to write a PR and because its open source so the style of the PR are not consistent. But in general everyone shows the changes with description that they are going to commit.

📌 What makes a good commit message?

- The commit message also should be direct, no filler works and phrases. Specify the type of commit and have a consistent set of words to describe the changes. Ideally should be short and no more than 80 words.

📌 How does a clear commit message help in team collaboration?

- Help others understand quickly and have the brief concept about the commit with a glance. From there reducing time while still get the core messages of the updates.

📌 How can poor commit messages cause issues later?

- Vague commit messages could cause extra time to trace back the commit when required and also possibly cause misunderstanding betweem memebers within the team.

📌 What does git bisect do?

- Base on my old experience, I started with marking the 'right' commit which the bugs had not appeared and marked the current commit with bugs as 'bad'. By running git bisect, it will divide the total number of commits counting from the 'right' and the 'bad' commit in half, take that commit and mark it as 'current'. If that 'current' commit does not cause the bugs, it will continue the process until finding the bugs. By using this technique, it could save a lot of time comparing to traditional manual commit checking process.

📌 When would you use it in a real-world debugging situation?

- I will pull the previous commit that I thing is 'good' and run the test. If it still contains the bugs, I will then use the git bisect.

📌 How does it compare to manually reviewing commits?

- It saves time consuming to search for the bug comparing to the manual checking process.

Modify to test Advanced Git Commands & When to Use Them #47
