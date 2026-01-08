# Advanced React Counter

## Description

This number counter leverages advanced React concepts like useState, useEffect, to display a detailed counter with reset and count history. This project is part of a lab assignment for Per Scholas Full Stack Engineering Bootcamp.

Live site: https://lab10-1.netlify.app/ 

## Features
Users can:
1. View current count
2. Increase or decrease count via buttons or by keying up or down
3. View a history of previous counts
4. Reset defaults for current count and history

## Process
I started the project installing dependencies, then building an `AdvancedCounter.tsx` component. This included:
* Building the UI with TailwindCSS with light styling
* Initializing a counter state with  default value of 0
* Creating base onClick handler functions for increase and decrease with console.log statements to verify functionality

I then worked on building the full functionality for the increase, decrease, and history logic. This included:
* Creating a state variable for a history array with a default array of [0];
* Initially built `addToHistory` helper function for use in both increase/decrease handlers, which later refactored into a useEffect depending on the `currentCount` state

Implemented reset
* This included using an event listener to reset both the history and current count states

Implemented keydown events for increase/decrease
* I learned how to implement event listener in the document and utilize a cleanup function so that it does not run when the component unmounts
* Since my application is just one page, it wouldn't unmount, but it was great practice to learn how to handle it for  more complex application to prevent memory leaks

## Reflections
One of the key takeaways for this project was learning how to implement a history within the UI as a list of items that were previously logged in state and continue building.

### Challenges
Fixing error with history display
* Initially, I was updating history via the increase/decrease handlers and a helper function, which was causing the history counter array to add the new number twice in the UI. I moved the update of history into a `useEffect` with the `currentCount` as a dependency to fix this issue and ensure history only updates once per count change. This also required setting the default value for the `countHistory` state array to an empty array instead of one initialized with [0], so that on first render, 0 doesn't print twice.