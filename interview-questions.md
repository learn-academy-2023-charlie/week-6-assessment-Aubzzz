# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. As a developer, I am creating a Rails application with a model called Cohort and a model called Student. The cohort model has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The cohort model would have the foreign key. To add a foreign key, there is a command that can be run, that I cannot actively recall.

Researched answer: In order to add a foreign key, the first step would be to generate a migration and run the command AddCohortIdToStudents, so that we can the foreign key to the Student model to link it to the Cohort model. The command would look like "rails generate migration AddCohortIdToStudents cohort:reference". Then we would have to change the database schema by using the change method and migration code, to add the cohort_id to students table. Then, run the "rails db:migrate" code to update the schema. Then go into the Student model and asssociate the Student Model with the Cohort model by typing "belongs_to :cohort".

2. Which RESTful routes must always be passed params? Why?

Your answer: I do not know the answer to this question, but will get back with a more researched answer.

Researched answer: The routes that must be passed params include: Create/Post, Update/PUT/PATCH, Show/Get and Destroy/DELETE. In order to get the outcome that a user would want, the important information to ensure that happens needs to be passed into these routes. Without parameters, you cannot create something, update, show or delete something. The system will not know what data or information to perform the action with.

3. Name three rails generator commands. What is created by each?

Your answer: Rails g Model, rails g resource and I do not know of the third one, but can look up the answer and get back to you.

Researched answer: There are many options that rails generator commands can be followed by. You can discover the options that rails generate commands have, by running 'rails g -h' in the terminal. Four rails generator commands include: 

--skip-javascript OR --no-skip-javascript = this command will skip over Javascript files when generating

--master, --main OR --no-main = set up the application with GemFile pointing to Rails repository on the main branch

-f, --force = overwrites files that already exist

-s, --skip, --no-skip = skip files that already exist

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform?

action: "GET" location: /students - Contorller method = Index, this would list all of the students in the database 

action: "POST" location: /students- Controller Method = Create, this would create new information/data that would need to be stored with the student in the database

action: "GET" location: /students/new = Controller method is new, this would create a new student, no data is added, just the position of a new student is

action: "GET" location: /students/2 - controller method-show, this would "show" in a view the student who is located at id 2

action: "GET" location: /students/2/edit - controller method- edit, this would allow the user to modify the student at id 2

action: "PATCH" location: /students/2 - Controlller method-update, this would change the data using new parameters input for the student located at id 2

action: "DELETE" location: /students/2 - Controller method-delete, this would delete the studen info at student id 2

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.


1. As a work center manager, I want to be able to contact team members with preset notifications so that I can reach them in various locations without having to recall them completely.

2. As a park ranger that collects data from wildlife trackers, I want to be able to store data in a database that provides accessibility to other ranger teams.

3. As a tourist in the park, I want to choose hikes, see important information for entry to ensure safety and maximum enjoyable experience in a new place.

4. As an educator for a non-profit, I want to be able to track and see trends in progress made in students to understand if the criteria is being implemented correctly. 

5. As a board member for a non-profit, I want to be able to view a donor list that accurately describes and shows where donations currently stand.

6. As a student, I want to be able to access assignments, grades and request forms to keep better track of progreess and open communication channels with an instructor. 

7. As a work center manager, I want to be able to track shop projects to ensure maximum time efficiency. 

8. As a family member, I want to be able to contact multiple family members at a time, to see everyone at once and share something immediate.

9. As a naturalist on whale watching tours, I want to be able to take recent whale sightings and input data so that it's accessible to myself and other networks, and provides trends of frequently sighted locations.

10. As a naturalist on a whale watching tour, I want to be able to input a photo of a dorsal fin and have it compared to a stored data base so that I may ID specific animals faster.