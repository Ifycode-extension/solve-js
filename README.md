# Solve js
Solve js is a client-only single page application containing vanilla javascript tasks. The tasks are related to features generally found in web applications. Just run the application like you would run any html file in the browser.

## Task instructions
* Your solutions should be built from scratch (no libraries or frameworks)
* You will find tasks (arranged in their respective folders) inside the `solve` folder
* DO NOT make changes to any file that is not in the `solve` folder
* See all sections below for further instructions

## Setup instructions
* Create a repo named **solve-js** in your own github account
* Clone this (original) repo onto your computer: 
````
git clone git@github.com:gads-projects/solve-js.git
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

## Branching instructions
Do not make any changes to the `main branch` (to avoid problems). The only thing you are allowed to do in the main branch is to pull in changes from the upstream (i.e. original) repo. You can also push the content of the main branch on your local computer to the main branch in your remote origin. Your tasks should be done in a different branch. Create a branch named `solve-tasks` from your main branch:
````
git checkout -b solve-tasks
````

## Commiting and pushing your changes
Once you are satisfied with your solution, you can so the following:
* Stage your changes:
````
git add .
````
* Commit your ahanges:
````
git commit -m "Write your commit message here"
````
Next, push your solution from your local computer to the remote (origin).
* Use this the first time you push:
````
git push -u origin solve-tasks
````
* Use this every other time:
````
git push
````

## How to submit
Follow the steps in **commiting and pushing your changes** section, and submit the link to your **solve-js** repo.

## Pulling in new changes

There'll be more tasks added along the way and in some cases minor fixes for the application. Make sure you add original repo as the upstream as instructed in the **setup instructions** section. Pull in changes from the upstream and merge into your created branch with these:
* Switch to the main branch:
````
git checkout main
````

* Pull in a new tasks or changes with:
````
git pull upstream main
````

* Switch back to the solve-tasks branch
````
git checkout solve-tasks
````

* Merge changes into the solve-tasks branch:
````
git merge main
````

# Tasks to work on

## Task 1: Toggle task

Find files to work with in the `toggle` folder inside the `solve` folder. Make the button toggle the div on and off like a switch, as shown in the .gif image below.

|![solvejs-toggle](https://user-images.githubusercontent.com/45185388/131866859-adb49d23-710b-4d89-a602-e146273fd785.gif)|
|--|

## Task 2: Filter task
Filter and all other tasks coming soon
