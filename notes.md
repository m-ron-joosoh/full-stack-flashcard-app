# Flashcard App using React
## setting up tool
### setting up node js
- downloaded **docker**
- error installing node js
- re install using packaged prebuilt node.js, the .msi file.
- choose automatically install the necessary tool
- installed **chocolatey**
- stumbled upon security error for windows powershell
- solved security error with ``` Set-ExecutionPolicy RemoteSigned -Scope CurrentUser ```

## starting the project 15-112-2025
1. create vite ```npm create vite@latest```:-
this caused error
1. next trying the ```npm init vite@latest ```: successful
1. named **flashcard-app**
1. chosen framework **React** with Javascript variant;

## Starting git
``` 
git init
git add.
git commit -m "Initial Vite/React setup and component design"
```
### setting git author
```
git config --global user.email "your.email@example.com"
git config --global user.name "Your Name"
```
### connecting to git hub
```
 git remote add origin https://github.com/m-ron-joosoh/full-stack-flashcard-app
 branch -M main 
 git push -u origin main
```
for setting url for new repository
```
git remote set-url origin git://new.url.here
```

encountering error ```error: failed to push some refs to 'https://github.com/m-ron-joosoh/full-stack-flashcard-app'```

The failure happens because the remote GitHub repository has files your local repository doesn't have (like the automatic .gitignore or LICENSE files GitHub often adds), and Git won't allow you to overwrite them without first syncing.

fix:-
```
git pull origin main --allow-unrelated-histories
git push -u origin main


```
above fix does not work because real problem missing .git suffix from the link to remote repository

to check remote url
```
git remote -v
```

resetting the remote url

```
git remote set-url origin https://github.com/m-ron-joosoh/full-stack-flashcard-app.git
```

stil error persist ...

recommited with 
```
git add .
git commit -m "Finalizing setup and components"
```
note: maybe because i forgot to recommit because the first time was failed because i have not setup my name and email?

push succesfull!

first commit:
```
git commit -m "feat: Implement useState and render multiple cards with map"
```

### some subfolder not committed
This is a common behavior that can happen after the complex Git restructuring we performed.

### github conflict
need to pull merge and push
```
git pull origin main
```

#### removing submodule tracking and re-commit
```
# 1. De-register the submodule entry in the local Git configuration
git submodule deinit -f flashcard-app

# 2. Remove the submodule's directory entry from the main repo's .git folder
rm -rf .git/modules/flashcard-app //can be skipped

# 3. Remove the folder entry from the main repository's index
git rm -f flashcard-app // continue next step if error

# 4. Use the Git checkout command to retrieve the contents of the folder from your last commit
git checkout main flashcard-app

# 5. Stage the folder as a normal directory
git add flashcard-app

# 6. Commit the final structural fix
git commit -m "fix: Final removal of flashcard-app submodule registration for clean directory structure"

# 7. Force push the clean history to GitHub
git push -u origin main --force
```

## starting react
1. open folder: flaschard-app
1. mkdir components in src folder
1. Naming Convention Tip: React component files should **always start with a Capital** Letter

## working with react
running the development server:

```npm run dev```

## front-end
### Prop
prop is an **object**. destructuring may be needed often.

### State Management
learning how to use **useState**
``` 
[variable, setterFunction] = useState(initialValue)
```
### Inter-Component Communication
#### passing functions as props

## Backend
1. create new folder separate from app called **server**
1. move into the folder and initiate node.js project
```
npm init -y
```
1. istall express
1. code server.js
1. create the server file
1. to test the server run
```
node server.js
```
1.install CORS

### fetching data from api endpoint
1. import useEffect
1. change flashcardData from array into State.
1. create new state to track data loading

### server Problems - failed get
server failed and display 
```
cannot GET
```

## starting mongo Db
1. created mongoDB atlas account using google account
1. install mongoose in server folder
```
npm install mongoose
```
1. get the connection string for vs code
```
mongodb+srv://shinhayate40_db_user:<db_password>@cluster0.s0cnnib.mongodb.net/
```

### hiding mongo DB sensitive info
1. create .env file
1. add .env to gitignore
1. install dotenv in server file
```
npm install dotenv
```

### accidently pushed .env
solution:
remove .env cache
```
git rm --cached .env
```
recommit and push with --force

## **questions that arised**:-
- what is object destructurinng in react?
- what is props (an object?)
- how does jsx differ from js. especially in terms of function
- advantages of using useState that custom state using object or list.
- how key prop work.
- git add . questions/
- git vs gitHub questions
- what is full stack app?
- what is express server?
- what is CORS
- how to know what tools i need 
- how to know I already have the tools?

## Pro tips
### how to navigate through unknown syntax and concepts
- Abstraction - focus on code roles rather than syntax
- Documentation and tools
- isolating and debugging
- how pro read documentation?


## Important concept for React
- Components
- Props
- State




