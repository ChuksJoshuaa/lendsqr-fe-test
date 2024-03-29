<h1 align="center">
  Lendsqr
  <br>
  <hr />
  <img src="https://res.cloudinary.com/chuksmbanaso/image/upload/v1672465329/media/download_cdc1sj.jpg" alt="lendsqr logo" title="lendsqr logo" width="200" height="200px">..
  <br>
</h1>
<p align="center" style="font-size: 1.2rem;">At Lendsqr, many of our lenders use web apps to reach over half a million customers</p>

<hr />

## Demo Link

Access the site at [Project-Link](https://chuck-joshua-m-lendsqr-fe-test.netlify.app)

## Table of Content

- [Installation](#Installation)
- [Technologies](#Technologies)
- [Screenshoots](#Screenshoots)
- [Usage](#Usage)
- [Project-Structure](#Project-Structure)

## Installation

First the project should be installed before running the development
server

```bash
npm install
npm start

OR

yarn install
yarn start
```

>

## Technologies

- React.js
- Typescript
- Scss
- Sass
- Bootstrap
- Redux Toolkit

## Screenshoots

<img src="https://res.cloudinary.com/chuksmbanaso/image/upload/v1672836219/media/Screenshot_77_p6f3fa.png" title="lendsqr-login" alt="lendsqr-login">
<img src="https://res.cloudinary.com/chuksmbanaso/image/upload/v1672836144/media/Screenshot_73_pdulay.png" title="lendsqr-users" alt="lendsqr-users">
<img src="https://res.cloudinary.com/chuksmbanaso/image/upload/v1672836127/media/Screenshot_75_be8ypg.png" title="lendsqr-single-user" alt="lendsqr-single-user">

## Usage

Before a user can access the main page which consist of the dashboard, users page and the single user page.
A login page is shown and the user must log in before proceeding to the next step. Initially, you can use
this email and the password below to login . So after successfully logging in, the first page that is shown is
the dashboard page. So users can navigate throught the users page and dashboard. Also once a user logs in,
they can now access their detailed page

```
 Email: Mathias_Gottlieb66@gmail.com
 Password: 123456
```

## Project-Structure

```bash
    |-- build
    |-- node_modules
    |-- public
    |-- src
        |-- components
              |-- FilterModal.tsx
              |-- index.tsx
              |-- Layout.tsx
              |-- Loader.tsx
              |-- MobileSidebar.tsx
              |-- Modal.tsx
              |-- Navbar.tsx
              |-- Pagination.tsx
              |-- PersonalInformation.tsx
              |-- Ratings.tsx
              |-- Sidebar.tsx
              |-- Table.tsx
        |-- css
              |-- styles.css
        |-- pages
              |-- Dashboard.tsx
              |-- Error.tsx
              |-- Home.tsx
              |-- index.tsx
              |-- Login.tsx
              |-- Single.tsx
        |-- redux
              |--features
                    |-- users
                    |-- userSlice.ts
              |--hooks.ts
              |--store.ts

        |-- scss
              |-- _body.scss
              |-- _loader.scss
              |-- _mobile.scss
              |-- _navbar.scss
              |-- _body.scss
              |-- _personal.scss
              |-- _single.scss
              |-- styles.scss
        |-- utils
              |-- Api.ts
              |-- conversions.ts
              |-- image.ts
              |-- link.ts
              |-- localStorage.ts
              |-- ratingsData.tsx
              |-- sidebarData.tsx
              |-- types.ts
              |-- userData.tsx
        |-- App.tsx
        |-- index.tsx
    |-- .gitignore
    |-- package-lock.json
    |-- package.json
    |-- README.md
    |-- tsconfig.json

```
