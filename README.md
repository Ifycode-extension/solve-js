# Solve js

|<img width="1099" alt="Screenshot 2021-09-08 at 11 08 06 PM" src="https://user-images.githubusercontent.com/45185388/132592416-56f6e37e-a071-43a6-a901-af0962fb4660.png">|
|--|

Solve js is a client-only single page application made by [@Ifycode](https://github.com/Ifycode) containing vanilla javascript tasks. The tasks are based on features generally found in web applications. Run the application on your local computer like you would run any html project e.g. with VScode live server (extension). Scroll or follow the links below to setup and participate in the javascript tasks released.

- [Setup instructions](#setup-instructions)
- [Check that setup is successful](#check-that-setup-is-successful)
- [Branching instructions](#branching-instructions)
- [Video: How to run and use app](#video-how-to-run-and-use-app)
- [Tasks to work on](#tasks-to-work-on)
  - [Read me first](#read-me-first)
  - [Task 1: Toggle task](#task-1-toggle-task)
  - [Task 2: Filter task](#task-2-filter-task)
  - [More tasks coming soon](#task-3-fetch-task)
- [Commiting and pushing your changes](#commiting-and-pushing-your-changes)
- [How to submit](#how-to-submit)
- [Pulling in new changes](#pulling-in-new-changes)
- [Contributing to solve js project](#contributing-to-solve-js-project)
- [Star repo and share](#star-repo-and-share)

# Setup instructions
* Create a repo named **solve-js** in your own github account (do not initialize with a readme or any other file, just make sure the repo is empty)
* Clone [this original repo](https://github.com/gads-projects/solve-js) onto your computer: 
````
git clone git@github.com:gads-projects/solve-js.git
````
* Cd into the project you just cloned:
````
cd solve-js
````
* Change remote origin to your own solve-js repo's url: 
````
git remote set-url origin your-own-solve-js-repo-url
````
* Add original repo as upstream (so that you can always pull in any new task I add): 
````
git remote add upstream git@github.com:gads-projects/solve-js.git
````
* You can always check if origin and upstream are set correctly with:
````
git remote -v
````

# Check that setup is successful
To check that the change of remote origin to your own repo is successful, try to push the cloned project to the solve-js repo you created in your own github account. Do this: 
````
git push origin main
````

Go back to the solve-js repo you created in your own github account. You should be able to see the content on your local computer now also exist in there too.

# Branching instructions
DO NOT make any changes to the `main branch` (to avoid problems). The only thing you are allowed to do in the main branch is to pull in changes from the upstream (i.e. original) repo. You can also push the content of the main branch on your local computer to the main branch in your remote origin (like we did in the [check that setup is successful](#check-that-setup-is-successful) section). 

**Note**: Your solution to the tasks should be done in the `solve-tasks` branch. Create a branch named `solve-tasks` from your main branch:
````
git checkout -b solve-tasks
````

Always confirm the branch you are in with:
````
git branch
````

To switch from one branch to another use:
````
git checkout branch-name-here
````

# Video: How to run and use app
Watch the this [youtube video tutorial](https://www.youtube.com/watch?v=KBv1IURk5D0) to take you through the following: the solve js application, how to run the application, where and how to write the solutions to the tasks, advice on how to go about testing that the `.html`, `.css` and `.js` files in the solve folder works etc.

[![solvejs-youtube-thumbnail](https://user-images.githubusercontent.com/45185388/132788307-e6278368-6af7-42a6-8bd1-d91b6d452cf9.png)](https://www.youtube.com/watch?v=KBv1IURk5D0)

# Tasks to work on
## Read me first
* These are vanilla tasks (no use of libraries or frameworks please)
* Ensure that you have followed the instructions in the previous sections before you begin any of the tasks
* Watch the [how to run and use app video](#video-how-to-run-and-use-app) to learn how to run the application, how the application works and how to make your changes without running into issues
* DO NOT make changes to any file that is not in the `solve` folder
* You will find tasks (arranged in their respective folders) inside the `solve` folder
* You will also find comments that will guide you in files that are inside the `solve` folder
* [Submit a task once you have completed it](#how-to-submit) before moving to the next one.

## Task 1: Toggle task

Make the button toggle the div on and off like a switch, as shown in the .gif file below. Find files to work with in the `toggle` folder which is inside the `solve` folder. 

|![solvejs-toggle](https://user-images.githubusercontent.com/45185388/132505399-e1088332-36b4-40d8-aa6c-65e4d5c925a7.gif)|
|--|

## Task 2: Filter task
Filter content based on colors as shown in the .gif image below. Find files to work with in the `filter` folder which is inside the `solve` folder. <!-- Display all content when the "All Colors" button is clicked on, and only display a specific color -->

|![solvejs-filter](https://user-images.githubusercontent.com/45185388/132273158-c074ff67-ba31-41fe-a982-acf1f71ae5a3.gif)|
|--|

## Task 3: Fetch task
Fetch task and other tasks coming soon...

# Commiting and pushing your changes
Once you are satisfied with your solution, you can do the following:
* Stage your changes:
````
git add .
````
* Commit your ahanges:
````
git commit -m "Write your commit message here"
````
* Next, push your solution from your local computer to the remote (origin):
````
git push origin solve-tasks
````

# How to submit
Follow the steps in [commiting and pushing your changes](#commiting-and-pushing-your-changes) section, and submit the link to your **solve-js** repo. Don't host your solution.

# Pulling in new changes

There'll be more tasks added along the way and in some cases minor fixes for the application. Make sure you add original repo as the upstream as instructed in the [setup instructions](#setup-instructions) section. You can always pull in changes from the upstream and merge into your created branch following these steps:
* Switch to the main branch:
````
git checkout main
````

* Pull in new tasks or changes to your local computer with:
````
git pull upstream main
````

* Also update your main branch on github with the new changes:
````
git push origin main
````

* Make sure to switch back to the solve-tasks branch:
````
git checkout solve-tasks
````

* Then merge changes into the solve-tasks branch:
````
git merge main
````
**Note:** You are only to merge the `main` branch into `solve-tasks` branch as shown above. Do not attempt to merge your solution in the `solve-tasks` branch into the `main` branch to avoid issues.

# Contributing to solve js project
You are welcome to contribute to the solve js project whether you find or fix a bug in the application, or want to suggest features or tasks to be added. Just take note of the following:
* The application is made without server or platform like nodejs and the likes on purpose. We don't want anyone participating in the tasks to be struggling with any other setup or task apart from (git and) vanilla javascript, which the project seeks to help participants improve upon. Also it is not limited to any framework or platform so that anyone interested can participate (as long as they have some knowledge of the javascript language).
* Contributors should fork the repo, create a new branch from the main branch, make the changes there and send a pull request. Do not make changes directly in the main branch or merge your changes into the main branch on your end. @Ifycode will merge in your changes in the main branch of the original repo when you send a pull request. You can then pull in the changes from the main branch of the original repo to your fork's main branch. If you have made the mistake of adding your changes in the main branch, just delete that fork and fork the project again.

# Star repo and share
Let @Ifycode know what you think about the project. Give the repo a github star if you like it. Share the original repo with anyone you know needs it!
