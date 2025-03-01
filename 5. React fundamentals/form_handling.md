Handling Forms with Formik #18
📌 How does Formik simplify form management compared to handling state manually?
From my personal experience, Formik provided the props such as initialValues, validationSchemas and onSubmit which help me quickly declares all values I need for the form, link them to validation logics with Yup, and handling the form submission easily. Comparing the traditional method, it is more efficient, reduces bugs, and saves more time to create a form.

📌 What are the benefits of using Formik’s validation instead of writing validation logic manually?
By integrating Formik and Yup for input validations, now I do not need to write different methods to validate each inputs anymore. For example, I previously have to declare the methods to ensure name is filled, name is valid, name is not numbers and more for emails. The numbers of inputs validation are enormous and sometimes do not cover enough loopholes therefore pass some invalid inputs. With this type of form validation, it is more effective and time efficient to create form with complicated inputs field and complex validation logics.
