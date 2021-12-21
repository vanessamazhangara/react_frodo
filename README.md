# Specializations Frodo v2
## Objectives

We will rebuild Frodo slowly component by component. These are the main goals of this exercise:
1. Class vs. Functional component: Start with class components and then refactor to functional components 
2. React Hooks: Learn how to write and use hooks (useState and useEffect will be our main 2 to focus on)  
3. Add in backend (Express, Node, Sequelize) and implement API integration.


 # Instructions:
 Week by week, the tasks will be added and updated in this README.md file. Students can simply run the command `git pull` and this will update with latest challenge or task.

 ## Getting started
Clone down the repo to your local machine. After git cloning the repo to your local machine, students should run the following commands:

1. `cd react_frodo`
2. `npm install`
3. `npm run start`
 ## Week 1
 1. Create a new folder under `src` called `components`
 2. Create a new file in the `components` folder called `Login.js` 
 3. Inside `Login.js`, create a class component called `Login` and have it render all the necesary components to replicate the Frodo login screen (Hint: Think Parent -> Child so an analogy would be Form element -> Input element)<br/>(Hint Hint: Use Chrome DevTools to inspect the page)
 4. Initialize state inside the `Login` component with the attributes `userName` & `password` set to empty strings. 
 5. Write a `handleChange` method inside the `Login` component that tracks the state of the userName and password variables as the user is interacting with the input fields. For example, if the user is typing in the username then we can monitor the state of this input field and capture the user's keystrokes.
 6. Once done, students will create a pull request on GitHub (students will be shown how to do this!) and if approved, I will merge the code and students can all view the new site as it grows.


 Keep in mind:
 1. Submit button shouldn't be functional at this point (we will build out that functionality later). The button (if written correctly...) will cause the page to reset upon submission and the input fields are clear.
 2. Styling is done inline and should be brief and to the point. (Hint: React inline styling is `style: {{ marginBottom: '10px'}}` so look up documentation if your confused!)
<br/><br/>

***Week 2 placeholder***

***Week 3 placeholder***

***Week 4 placeholder***
   
***Week 5 placeholder***