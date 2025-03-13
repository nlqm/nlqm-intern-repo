Logging and Crash Reporting with Sentry #70

📌 Why is logging important in a production React Native app?
By logging into a productive app, it could track errors or crashes if they appear with the recorded screen so the coder can understand the situation. By being able to identify and aware of the bugs or errors, it is easier to debug faster and therefore improve app performance.

📌 How does Sentry improve debugging and issue tracking?
Due to my research, Sentry automatically records crashes when it happens and provide the details of the issues. I have not tried yet but Sentry also offer the performance monitor to detect slow performance. 

📌 What are best practices for handling and logging errors?
The first thing that I will do is avoiding logging confidential data to prevent data breach. Using try catch function and error boundaries to prevent app break down is another method. Separating the logs by tags to help organising the logs list and easier to manage.