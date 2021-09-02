# Solve js
Solve js is a client-only single page application containing vanilla javascript tasks. The tasks are related to features generally found in web applications. Just run the application like you would run any html file in the browser.

## Task instructions
* You will find tasks (arranged in their respective folders) inside the `solve` folder
* DO NOT make changes to any file that is not in the `solve` folder
* See **setup instructions**, **branching instructions** and **pulling in new changes** sections below for further instructions

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
Do not make any changes to the `main branch` (so has to avoid problems). The only thing you are allowed to do in the main branch is to pull in changes from the upstream (i.e. original) repo. You can also push the content of the main branch on your local computer to the main branch in your remote origin. Your tasks should be done in a different branch. Create a branch named `solve-tasks` from your main branch:
````
git checkout -b solve-tasks
````

## Pulling in new changes

There'll be more tasks added along the way and in some cases minor fixes for the application. Make sure you add original repo as the upstream as instructed in the **setup instructions** section. Pull in changes from the upstream and merge into your created branch with these:
* Switch to the main branch:
````
git checkout main
````

Pull in a new tasks or changes with:
````
git pull upstream main
````

Switch back to the solve-tasks branch
````
git checkout solve-tasks
````

Merge changes into your branch:
````
git merge main
````

## How to submit
You can
## Task 1: Toggle task

|![solvejs-toggle](https://user-images.githubusercontent.com/45185388/131866859-adb49d23-710b-4d89-a602-e146273fd785.gif)|
|--|
