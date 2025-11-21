// version control allows user to take snapshots of
// changes to code, view the history of changes, rollback
// changes and start over in previous versions, and 
// collaborate on priojects without overwriting others' code

// Git is a distributed version control system (VCS) that
// allows devs to work on a project simultaneously and
// provides tools for branching, merging, and tracking
// changes across the codebase
// Git comes pre-installed on Mac

// GitHub is a code host service that hosts Git repositories
// Git is software, GitHub is a service
// Git is a command-line tool, GitHub is a GUI

// Git runs in the terminal: Finder/Applications/Utilities/Terminal
// type 'pwd' to see which directory Git currently points to
// to 'point' Git at the directory we want to be using, type
// 'cd /Users/natelevinson/Desktop/git-basics' in terminal to
// change the directory
// type 'git init' to initialize an empty repo in that directory
// type 'ls' to list all files in the directory
// type 'git status' to see status of each file (e.g., modified, untracked, etc.)

// type 'git add .' to move all files from 'working directory' to 'staging area'
// type 'git commit -m' followed by a message in double quotes
// to move files from the 'staging area' to the 'local repo'
// type 'git log' to see list of commits, shows all changes and allows for
// reversions to previous versions

// type 'git checkout' followed by commit code for a previous commit to view
// that version of the codebase
// type 'git checkout main' to revert to the most recent version of the codebase

// master branch contains all commits for the 'main' file
// other branches can be added off of the master branch that allows users to commit
// new versions of the code without changing the master branch
// the other branches can be merged into the master branch

// type 'git checkout -b' followed by branch name and a commit code
// to create new branch
// to merge a branch back into the master branch
// type 'git checkout main' to revert to master branch, then type 'git merge'
// followed by the name of the branch to be merged

// the terminal represents the 'local git repo'
// github represents the 'remote git repo' (see diagram)

// to create a new git repo to be linked to github:
// echo "# git_intro_series_repo" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/nlevinson105/git_intro_series_repo.git
// git push -u origin main

// to link an exisitng git repo to github:
// git remote add origin https://github.com/nlevinson105/git_intro_series_repo.git
// git branch -M main
// git push -u origin main

// new branches can also be created on github and then
// pulled to local git repo using 'git pull origin' followed by branch name
// use github pull requests to merge branches on github
// new files can also be added directly on github and then
// pulled to local git repo using 'git pull origin' followed by branch name


function inflate (num, inf, years) {
    const answer = num * (1 + inf) ** years;
    return answer.toFixed(2);
}

console.log(inflate(10, 0.03, 2));

console.log(inflate(10000, 0.07, 30));


// this is a new function
function sayHello (name) {
    console.log(`Hello ${name}!`);
}

sayHello('Nate'); 
