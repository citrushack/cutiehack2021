# CutieHack 2021
> Author: J.S. Pescasio

> Contributors: 
> Danial Beg,
> Rajbir Johar,
> Minsoo Kim,
> Caleb Yoo,
> Andrei Dimaano,
> James Zhang

This is the codebase for CutieHack 2021. Below is a guide for setting up a local environment to run the website locally for development purposes.

## Prerequisites
#### Windows
- **[Windows Terminal](https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701):** This is used to navigate through the project/repo and to run the development server.
- **[Ubuntu WSL](https://www.microsoft.com/en-us/p/ubuntu/9nblggh4msv6) (Recommended):** This is to use the bash terminal found in Linux. I recommend using a WSL to use Linux commands for developing this project. Follow [this guide](https://docs.microsoft.com/en-us/windows/wsl/install-win10) to install.

#### Mac
- **Terminal:** This is used to navigate through the project/repo and to run the development server.
- **[Homebrew](https://brew.sh/):** This is a package manager for Mac. Run the following command in a terminal to install:
  - `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

#### All OSes
- Install **[Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)**
- Install **[Node.JS](https://nodejs.org/en/)**
- Install **[Yarn](https://yarnpkg.com/getting-started/install)**
  - Run the following command to install: `npm install yarn`
- Install a code editor of your choice (e.g [VScode](https://code.visualstudio.com/), [Atom](https://atom.io/), [Sublime](https://www.sublimetext.com/), etc.)
- Install at least two popular browsers (e.g. Chrome, Firefox, Safari, etc.). This is for testing for cross compatibility for different browsers.

## Setting Up Your Local Environment
Run the following commands in a terminal.
### Clone the Project
- `git clone https://github.com/citrushack/cutiehack2021`
- `cd cutiehack2021`
  - This is to navigate into the directory generated for the cloned repo.
- If you are using VScode, run `code .` to open the current directory in VScode (this is mainly for easier navigation)
  - You may need to install **code** so run `sudo apt install code`

### Install Necessary Packages
- `yarn` or `yarn install`
  - This will install all necessary packages for the project. 

### Run the Development Server
- `yarn dev`
- Go to http://localhost:3000/
  - This is the port where the development server is run on. Any changes you make to the code will reflect almost instantly while the server is running.

## Contributing to the Project
### Forking
> Forking the repo to work on your own code.
- Fork the repo by clicking the `Fork` button in the upper right corner
  - This creates a copy of the repository in your own account.

### Committing Changes
- Check what files you edited: `git status`
- Adding files to commit: `git add <file-name>` or `git add .` to commit all files
- Commit files: `git commit -m <useful-message>`
  - Try committing frequently and writing useful messages to describe the changes you made.
- Push your changes: `git push`
  - If it's your first time pushing changes from a new branch, you may need to run `git push -u origin <branch-name>`

### Creating Pull Requests
> Make a pull request when you have code to merge.
- Go to your forked repo on Github and click the "Contribute" option near the top. 
  - Click `Open Pull Request`.
  - Compare your branch to the main branch. Then click `Create Pull Request`.
  - Assign the webdev lead to review your code (see the righthand side).
  - Leave a comment if you want to. Then click `Create Pull Request`.

### Fetching Upstream
> Match your repository to the master branch.
- Go to your forked repo on Github and click the "Fetch upstream" option near the top. 
- Click `Fetch and Merge` to fetch the master branch and merge the master code into your repo.
  - This will merge any new changes made in the master branch into your repo.
  - I recommend committing any of your changes to your forked repo before doing this, so you can see if there will be any conflicts.

### Assigning Yourself to Issues
> Issues are tasks to be done for the project.
- Go to the repo on Github and open the "Issues" tab.
  - This acts as a taskboard for what needs to be done for the project.
- Click on an issue to read more information about it.
- If you want to work on an issue, assign yourself to the issue (see the righthand side).

## Tech Stack
- **[NextJS](https://nextjs.org/)**: This is the frontend framework for this project.
- **MongoDB**: This is the database used for the backend for this project.
