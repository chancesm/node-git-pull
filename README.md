# node-git-pull

## About
A school group project required the need to pull code from a repository to an internal live server. I wanted a simple way to pull the code onto the server without having to ssh in and run "git pull" every time someone commits new changes to the repository. Due to the internal nature of the server, a Github web hook isn't possible. Instead, I created a simple Express application with a single endpoint that will trigger a git pull in the directory indicated in the code.

## Usage
1. Clone or Download this repository on the host it will be run on.
2. Edit the path to the git directory that you will be pulling into.
3. Install the NodeJS dependencies ``` npm install ```
4. Run the code with ``` node index.js ```

### Note
If you intend to use this tool indefinitely, it is recommended to find a way to run the code in a background process. I recommend using pm2, a process manager for NodeJS applications
