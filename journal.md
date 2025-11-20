




---

## 📝 Developer Journal: Full-Stack Flashcard App (Updated)

## 🚀 Project Goals & Roadmap

* **Goal:** Build a full-stack, deployed flashcard application using React and a Node.js/Express backend, implementing a custom spaced repetition algorithm.
* **Current Phase:** Phase 1: Frontend Framework Mastery (React/Vite)

| Phase | Status | Key Milestones | Estimated Time | Actual Completion Date |
| :--- | :--- | :--- | :--- | :--- |
| **P1** | **IN PROGRESS** | **Setup complete**, Component breakdown, State Management, Basic Routing. | 7 Days | |
| **P2** | TO DO | Backend API with Express/Flask, Database integration (MongoDB/PostgreSQL). | 10 Days | |
| **P3** | TO DO | Authentication (Login/Signup), Deployment to hosting service. | 5 Days | |

---

## 🗓️ Daily Log: 2025-11-15 (Setup Completion & Policy Fix)

### 🎯 Plan for the Day

1.  Resolve the **PowerShell Execution Policy** error.
2.  Successfully run the **Vite/React** app.
3.  Complete the final **Git** commit for setup.

### ✅ Accomplishments

* **Security Policy Fixed:** Resolved the `running scripts is disabled` error by running the following in an **Administrator** PowerShell window: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`.
* **Project Scaffolding Success:** The command was corrected from `npm create` to the more reliable **`npm init vite@latest`**. Selected **React** and **JavaScript** for the framework.
* **Vite/React Setup Complete:** The project dependencies were installed (`npm install`), and the development server was successfully started (`npm run dev`).
* **Git Initialized:** The final setup files were committed: `git commit -m "Initial Vite/React setup complete and validated"`.

### 🚧 Roadblocks & JIT Learning

* **Problem 1:** Initial success verification of `npm -v` led to a **PSSecurityException** (`running scripts is disabled`).
    * **Solution/JIT Topic:** Learned about **PowerShell Execution Policies** and used the `Set-ExecutionPolicy` command to fix the local environment security restriction.
* **Problem 2:** The `npm create vite@latest` command failed with an `npm error code 1`.
    * **Solution/JIT Topic:** Switched to the explicit, more robust command: **`npm init vite@latest`**, which resolved the internal command parsing error.
* **Key Insight:** System-level commands (like `Set-ExecutionPolicy`) require **Administrator privileges**, but running development commands (like `npm run dev`) should be done in a **regular terminal**.

### 🧠 Learning Takeaways (Atomic Note)

* **L1:** The **PowerShell Execution Policy** is a common Windows security feature that must be lowered (usually to `RemoteSigned`) for Node.js development tools to work locally.
* **L2:** **`npm init [package]`** is often a more reliable command structure than **`npm create [package]`** for scaffolding new projects.

---

## ➡️ Next Step: Component Design

You are now officially past the setup phase! Your next JIT Learning Block is **Step 2: Component Design**.

* **JIT Question:** **What is a React component and how do I pass props?**

Are you ready to open VS Code and start building the first components of your app?

🗓️ Daily Log: 2025-11-17 (Frontend Completion & Backend Start)
✅ Frontend Mastery Accomplishments
State Management Complete: Successfully implemented the useState Hook and event handlers to make the single <Flashcard> component interactive (flipping).

List Rendering Complete: Used the .map() method and the mandatory key prop to render multiple cards from an array efficiently.

Lifting State Up Complete: Implemented inter-component communication by passing a setter function (handleNextCard) down as a prop, enabling the card to control the deck progression.

⚙️ Backend Foundation & API Setup
Server Initialized: Created the separate server directory and initialized the Node.js project using Express.

Communication Enabled: Installed and configured the CORS middleware to allow communication between the frontend (port 5173) and the backend (port 5000).

Data Parsing: Enabled Express to parse incoming data using app.use(express.json());.

First Endpoint: Created the GET /api/cards endpoint, which now successfully serves static flashcard data.

🚧 Git Management
Issue Resolved: Resolved persistent Git push issues caused by missing identity and conflicting histories. The problem was fixed by running the final sequence: git commit -m "..." followed by git push -u origin main --force.


## 🗓️ Daily Log: 2025-11-19 (Full-Stack Success!)

### ✅ Accomplishments
* **Full-Stack Connection Verified!** The React frontend is now successfully fetching the flashcard data from the Express backend (`/api/cards`).
* The "Loading..." message appears and is correctly replaced by the first card from the server.
* The `useEffect` hook and `fetch` call are working as intended.

### 🚧 Roadblocks & JIT Learning
* **Problem:** Server returned `Cannot GET /api/cards`.
* **Solution:** Corrected a syntax mismatch in `server.js`. Switched from modern ESM (`import`) to traditional CommonJS (`require`) syntax, which is the default for Node.js Express servers.
* **Key Insight:** The backend (`node server.js`) and frontend (`npm run dev`) MUST run in separate, concurrent terminals. Debugging was simplified by testing the API URL (`http://localhost:5000/api/cards`) directly in the browser first.