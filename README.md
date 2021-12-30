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

## Week 2
 1. Create a new file in the `components` folder called `Input.js` 
 2. Inside `Input.js`, create a class component called `Input` and have it render all the necesary components to replicate the Frodo search field in the top right of the Frodo homepage <br/>(Hint: Use Chrome DevTools to inspect the page and see the HTML element tree)
 3. Initialize state inside the `Input` component with the attribute `query` set to an empty string. 
 4. Write a `handleChange` method inside the `Input` component that tracks the state of the query variable as the user is interacting with the input field. For example, if the user is searching for an assignment then we can monitor the state of this input field and capture the user's keystrokes.
 5. Create a new file in the `components` folder called `Footer.js`. This class component will render the entire footer recreated from Frodo. (Hint: Think of your component tree first inside the render() return of this `Footer.js` component. There will be several `divs` that hold several buttons. Use the Google Chrome extension Pesticide as a visual aide)   
 6. Create a new file in the `components` folder called `Header.js`. This class component will render the entire header and navigation bar recreated from Frodo. This includes the devmountain logo, the `Input` component from step 2, a dropdown menu, a nav bar with the tabs labeled `[lectures, exercises, further study, more (this should be a dropdown menu)]`


 Keep in mind:
 1. You do not have to import the Footer or Header components yet. You can develop them in isolation and once they look like the real website versions, we will add them in week 3.
 2. Don't worry about routing to how to get to and/from this page or the login component. The buttons shouldn't work either.
 3. Consider our data model. Our `User` model at this point can be expected to have some sort of `userName`, `password`. As we build out the backend and API, we will introduce relationships such as students courses, assignments, grades and project pages.  
<br/><br/>

***Week 3 placeholder***

***Week 4 placeholder***
   
***Week 5 placeholder***