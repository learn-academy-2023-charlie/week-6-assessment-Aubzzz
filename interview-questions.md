# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The cohort model would have the foreign key. To add a foreign key, there is a command that can be run, that I cannot actively recall.

Researched answer:

2. Which RESTful routes must always be passed params? Why?

Your answer: I do not know the answer to this question, but will get back with a more researched answer.

Researched answer:

3. Name three rails generator commands. What is created by each?

Your answer: Rails g Model, rails g resource and I do not know of the third one, but can look up the answer and get back to you.

Researched answer: There are many options that rails generator commands can be followed by. You can discover the options that rails generate commands have, by running 'rails g -h' in the terminal. Four rails generator commands include: 

--skip-javascript OR --no-skip-javascript = this command will skip over Javascript files when generating

--master, --main OR --no-main = set up the application with GemFile pointing to Rails repository on the main branch

-f, --force = overwrites files that already exist

-s, --skip, --no-skip = skip files that already exist

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students - This will retrieve a source 

action: "POST" location: /students

action: "GET" location: /students/new

action: "GET" location: /students/2

action: "GET" location: /students/2/edit

action: "PATCH" location: /students/2

action: "DELETE" location: /students/2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.
