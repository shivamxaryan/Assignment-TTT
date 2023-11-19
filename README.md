# Terribly Tiny Tales Assignment

## Live Link : https://profilettt.netlify.app
## Overview

This React-based web application showcases a personal profile page with details about the user, their posts, and a curated content feed. The UI is crafted using Tailwind CSS for a responsive and modern design.

## Project Structure

The project is organized into several components and utility files. Below is an overview of the main components:

### 1. **Index.js**
   - Entry point of the application.
   - Renders the main `App` component inside a `React.StrictMode`.

### 2. **App.js**
   - Main container component for the application.
   - Imports and renders the following components:
     - `Navbar`: Displays a navigation bar.
     - `Head`: Renders user profile information.
     - `Post`: Container for displaying user posts.

### 3. **components folder**
   - Contains React components used in the application.

   #### a. **Navbar.jsx**
   - Displays a navigation bar with a logo and a button for courses.
   - Styling utilizes Tailwind CSS classes.

   #### b. **Head.jsx**
   - Renders user information, including a cover image, profile image, user stats, and social media links.
   - Uses data from `data.json` for dynamic content.
   - Styling and layout designed with Tailwind CSS.

   #### c. **Post.jsx**
   - Container for displaying user posts.
   - Imports and renders `PostCard` component.
   - Utilizes Tailwind CSS for styling.

   #### d. **PostCard.jsx**
   - Displays individual post cards.
   - Retrieves post data from `data.json`.
   - Utilizes Tailwind CSS for styling.
   
### 4. **utils folder**
   - Contains utility files for data.

   #### a. **data.json**
   - Holds JSON data for user information and posts.
   - Used to dynamically populate content in various components.

### 5. **assets folder**
   - Contains image assets used in the application.

## Libraries and Plugins Used

- **React**: JavaScript library for building user interfaces.
- **ReactDOM**: React package for DOM rendering.
- **Tailwind CSS**: Utility-first CSS framework used for styling.

## Getting Started

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the application using `npm start`.

## Additional Notes

- Ensure that Node.js and npm are installed on your machine.
- The project utilizes Tailwind CSS, so familiarity with its utility classes is beneficial.


