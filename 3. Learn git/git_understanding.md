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

📌 What does each command do?
The git checkout <branch> -- <file> is use to restore a specific file.
git log command is the simple on which view the history of the commits within the branch.
The git cherry-pick <commit> will apply specific commit from another branch and avoiding merging and changing the whole branch.
git blame <file> is used to view the records of the coder of each line within the file

📌 When would you use it in a real project (hint: these are all really important in long running projects with multiple developers)?
I usually use git log and git blame more regularly comparing to other commands. In my personally idea, i think the git cherry-pick will be more useful within the team environment to ensure merging the adjusted part only from member's branch without affecting the main's components to avoid bugs.

📌 What surprised you while testing these commands?
I mistake the way to use git checkout and git cherry-pick command and did not see much changes after using them but I believe it gonna be helpful in the future.

Merge Conflicts & Conflict Resolution #48
📌 What caused the conflict?
By making big alternations in the new branch comparing to the main branchs, GitHub makes sure that you review those changes by resolving each conflicts to avoid wrong or accidental merging between branchs and protect the main branch therefore avoid broken codes.

📌 How did you resolve it?
I usually use the GitHub website to review them with my team members or supervisors if possible to ensure the conflicts are solved without creating new problems to the code base

📌 What did you learn?
Always review the conflicts and solve them with care and attention. It would be better if I can review it with others such as my team mates or supervisor. Handling everything with care could help reducing possible serious problems in the future.

Branching & Team Collaboration #49
📌 Why is pushing directly to main problematic?
As working in a team, ensuring the code base is safe as a backup is extremely important. If pushing all changes to main branch, it is difficult to trace back the safe code base to restart when we needed. By keeping main branch safe, the team could go back the safe backup anytime which is time saving and efficient.

📌 How do branches help with reviewing code?
Creating different branch for each member could help all members of the team quickly know the process of the member by reviewing commit history of that member's branch. Reviewing merge conflicts when member creating pull requests allows supervisor or other members rapidly review the changes between the current and the new branch. Conflicts revolving process is also the method to review code with the code base.

📌 What happens if two people edit the same file on different branches?
If people edit the same file on different branch, it could help reducing file overwrite and clashing comparing to 2 people pushing changes within the same file on the same branch.

Git concept: staging vs committing #50
📌 What is the difference between staging and committing?
Stagging is creating the making the changes on without affecting the repo, can be modified by use git checkout or git reset command and do not require push. Committing is actually saving changes in local git history by pushing new commit and cannot be modified after pushing.

📌 Why does Git separate these two steps?
From my personal opinion, it gives coder choices to make the changes, edit the files and checking for bugs before actually creating a commit by pushing changes on GitHub to affect the repo.

📌 When would you want to stage changes without committing?
From my personal experiences, I use stagging to code the new functions or modify the functions and only committing after testing and ensure it worked as I intended.
