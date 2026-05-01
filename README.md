# Smart Task Planner

Smart Task Planner is a simple React app for tracking tasks with deadlines, priorities, completion status, filters, and dark mode. Tasks are stored in the browser with `localStorage`, so they remain available after refreshing the page.

## Features

- Add tasks with a title, deadline, and priority.
- Mark tasks as complete or pending.
- Delete tasks.
- Filter tasks by all, completed, pending, or high priority.
- Highlight overdue tasks.
- Switch between light and dark mode.
- Keep tasks in browser storage.

## Tech Stack

- React
- Create React App
- CSS
- Browser `localStorage`

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

### `npm start`

Runs the app in development mode.

### `npm test`

Runs the test suite.

### `npm run build`

Creates an optimized production build in the `build` folder.

## Project Structure

```text
src/
  components/
    FilterBar.js
    Navbar.js
    TaskForm.js
    TaskItem.js
    TaskList.js
  App.css
  App.js
  App.test.js
```
## Live-https://tasky-iota-six.vercel.app/

## Notes

This project is intended as a small frontend task-planning app. It does not require a backend server because task data is saved in the user's browser.
