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
1. long pages (why load the whole page when you can load and render as-needed or as-likely-needed?)

### Using The Dynamic `import()` Syntax

You're all familiar with the basic ESM `import` syntax. We use it everyday. Let's take a look at some imports... (Leads into "I do, we do, you do") exercise contents)

In the project directory, you can run:

`yarn && yarn start`
