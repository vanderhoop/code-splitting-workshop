# Code Splitting

### Learning Objectives

After this session, attendees should be able to:
* define code-splitting and identify its chief use cases
* use dynamic imports to dynamically import code as needed
* explain why the benefits of dynamic imports can be lost due to your application's import patterns

### "The Heck is Code-Splitting? Sounds painful."

> Code splitting is the splitting of code into various bundles or components which can then be loaded on demand or in parallel.

attribution: https://developer.mozilla.org/en-US/docs/Glossary/Code_splitting

### "Okay, but why would we do that? What are the use cases?"

1. routes in a single-page app
1. long pages (why load the whole page when you can load and render as-needed?)

### Using The Dynamic `import()` Syntax

You're all familiar with the basic import syntax. We use it everyday. Let's take a look at some imports in jupiter.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
