filename: README.md
<p>https://github.com/Antelman82/Show-Management-App-Frontend</p>
<p>https://github.com/Antelman82/Show-Management-App-Backend</p>

# Show-Management-App-Frontend
## Project #3: 

The main objective of this project was to create an application that a team could use to manage different projects. In this case, firework shows. Where many seasons could be included from past, present and current. The User should be able to log in and see all shows, as well as current shows, equipment, customers, and types of shows. 

---

## Screenshots
- Wireframe
<p align="center">
<img src='Project 3 Wireframe - Show Management App.jpg' width=600 align='center'>
</p>

<p align="center">
<img src='Project 3 Wireframe - Show Management App - page2.jpg' width=600 align='center'>
</p>

<p align="center">
<img src='Project 3 Wireframe - Show Management App - page3.jpg' width=600 align='center'>
</p>

<p align="center">
<img src='Project 3 Wireframe - Show Management App - page4.jpg' width=600 align='center'>
</p>
---
Assetts

https://wall.alphacoders.com/big.php?i=370767

---

## User Stories
1. As a user, I want to be able to securely login to the Show Management application, so I can use the system to manage my shows.
1. As a user, I want to be able to see all shows I’ve worked, so I can track my show history.
1. As a user, I want to I want to view all products for a specific show, so I can use those same effects in another future show.
1. As a user, I want to be able to see all shows I’m scheduled for in the future, so I can manage my schedule.
1. As a user, I want to view all of the equipment for a specific show, so I know what I need to pack to shoot the show.
1. As a user, I want to see the which other shooters are on my upcoming shows, so I can contact them and work out logistics for the show.
1. As a user, I want to be able to view all of my shows for a specific year, so I can track the numbers of shows I’ve completed.
1. As a user, I want the ability to make updates to different aspects of each show, so I can keep the system information up to date.
1. As a customer, I want to be able to see all shows I have scheduled in the future, so I can plan for upcoming events.
1. As a customer, I want to manage the products that are in my upcoming shows, so I can plan the best show possible.
1. As a customer, I want to see the staff assigned to my show, so I can contact them and coordinate security and other details for the show.
1. As a customer, I want to be able to see a complete list of shows that I’ve had, so I can plan for the future.
1. As a system administrator, I want the ability to add shows and details, so the users and customers can view all upcoming shows that 
1. As a system administrator, I want the ability to add, modify and delete users to the system, so the staff can access the details for the shows assigned to them.


## Bronze Level:
- MVP
    - Basic Navigation
        - Show Types
        - Customers
        - Users
        - Equipment
    - Able to add users, and shows
    - Able to update users and shows
    - Able to delete users and shows

## Silver Level:
    - User login
    - click on show more info to see specifics of a show
    - Connect users with shows
    - connect equpipment with shows
    - add a map for the location of the venue

## Gold Level:
    - user password maintenance
    - filter user's shows by year
    - We would expand on the show component, and we link to that using the AsideList links. 
        this would allow adding equipment and products to each.
    - also on the show page we could add and remove the products, equipment, users, roles, and also update the status, as well as date, and even venue.

---

## Necessary Deliverables
design and build an app with two major components:
1. An API of your own design (built using Node, Express, and Mongoose) that serves JSON.
1. A front-end React application that updates the UI and makes requests to the API.

## Technical Requirements
### Back-End Requirements:
- A GitHub repo with your backend app
- Your back-end must be a Node, Express, and Mongoose API with at least 2 non-user models. No associations are required.
- Must have Create, Read, Update, and Destroy functionality built throughout the app (i.e. You don't need full CRUD on every model, just full CRUD throughout your models where it makes sense).

### Front-End Requirements:
- A GitHub repo with your frontend app
- Your front-end must use React and leverage the backend API in the above requirements.
- You must use React Router to handle multiple views.
- You must communicate with the back-end API RESTfully to Create, Read, Update, and Destroy resources (using axios).
- Your frontend must be responsive and work on mobile phones, tablets, and desktops

## Collaboration
- A GitHub repo with your frontend app
- Your front-end must use React and leverage the backend API in the above requirements.
- You must use React Router to handle multiple views.
- You must communicate with the back-end API RESTfully to Create, Read, Update, and Destroy resources (using axios)
- Your frontend must be responsive and work on mobile phones, tablets, and desktops
You must have at least one test for each of your components

## Deployment
- Your API must be deployed to Heroku and your front-end must be deployed to GitHub pages or Surge. Applications that are not deployed will be considered incomplete.
---

## Backend API
### cutomers
https://show-management-app-backend.herokuapp.com/api/customers
get customers/ returns all customers
get customers/:id
post
put customers/:id
delete customers/:id
### equipments
https://show-management-app-backend.herokuapp.com/api/equipments
get equipments/ returns all equipments
get equipments/:id
post
put equipments/:id
delete equipments/:id
### products
https://show-management-app-backend.herokuapp.com/api/products
get products/ returns all products
get products/:id
post
put products/:id
delete products/:id
### shows
https://show-management-app-backend.herokuapp.com/api/shows
get shows/ returns all shows
get shows/:id
post
put shows/:id
delete shows/:id
### types
https://show-management-app-backend.herokuapp.com/api/types
get types/ returns all types
get types/:id
post
put types/:id
delete types/:id
### users
https://show-management-app-backend.herokuapp.com/api/users
get users/ returns all users
get users/:id
post
put users/:id
delete users/:id
get /username/:userName returns specific user by username 
### venues
https://show-management-app-backend.herokuapp.com/api/venues
get venues/ returns all venues
get venues/:id
post
put venues/:id
delete venues/:id

---

## Bugs
The businessName of the Customer component and the businessName of the Show component don’t always match. This error can be solved by adding a field to display eventName to the Show component.

---
## Technologies Used:
- **Command Line**: used for interacting with the computer, navigating the filesystem.
- **Source Control**: used for interaction, management and upload changes on code to Git repository
- **Visual Studio Code**: used for coding with Html, CSS, JQuery and JavaScript
- **Google Chrome Web Browser**: used for launching the website
- **Google Chrome Developer Tools**: used to debug and solve problems in the code
- **React-app**: used to access the words.json file
- **Postman**: To test and work with the api communication
- **Axios**: https://github.com/axios/axios for application side API calls.
- **Mongoose**:
- **Express**:
- **MongoDB Compass**:
- **Heroku**

## Installation:
All you need is:
surge
react-app
vscode
google chrome

## Dependencies

### Frontend
    @material-ui/core
    @testing-library/jest-dom
    @testing-library/react
    @testing-library/user-event
    cors
    material-ui
    react
    react-dom
    react-router
    react-router-dom
    react-scripts
    Axios

### Backend
    body-parser
    chai
    cors
    express
    mocha
    mongoose
    supertest
