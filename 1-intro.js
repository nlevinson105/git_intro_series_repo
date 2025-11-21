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


function inflate (num, inf, years) {
    const answer = num * (1 + inf) ** years;
    return answer.toFixed(2);
}

console.log(inflate(10, 0.03, 2));

console.log(inflate(10000, 0.07, 30));

