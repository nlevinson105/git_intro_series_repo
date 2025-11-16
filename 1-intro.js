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
// to 'point' Git at the directory we want to be using, type
// 'cd /Users/natelevinson/Desktop/git-basics' in terminal to
// change the directory
// type 'git init' to initialize an empty repo in that directory
// type 'ls' to list all files in the directory
// type 'git status' to see status of each file (e.g., tracked, untracked, etc.)


function inflate (num, inf, years) {
    const answer = num * (1 + inf) ** years;
    return answer.toFixed(2);
}

console.log(inflate(10, 0.03, 1));

