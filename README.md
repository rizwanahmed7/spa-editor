# SPA Editor
This project is a single-page application (SPA) editor built using React, TypeScript, and Redux. The editor allows users to add predefined polygons to an empty editor area, manipulate/interact with existing shapes, and serialize the editor state to JSON. The UI consists of two parts: the editor area on the right and a toolbar on the left.
## Getting Started

### Pre-requisites
- Install [Node.js](https://nodejs.org/en/)
- Install [NPM](https://www.npmjs.com/)

#### To get started with this project, follow the steps below:

1. ##### Clone this repository to your local machine.

   Link of repo: `https://github.com/Hafizahmed2/spa-editor`
2. ##### Install dependencies
    `npm install`
3. #### Start the development server
    `npm start`
4. Open http://localhost:3000 in your browser to view the editor.

## UI Components

### Editor Area
  - The editor area is initially empty.
  - Users can add predefined polygons using shape-adding tools,manipulate/interact with existing shapes.
### Toolbar
  - The toolbar is located on the left side of the UI and consists of six tool buttons.
  - Clicking on a tool button activates a corresponding tool.
  - Only one tool can be active at a time.
  - Text labels are used instead of icons.

#### The three buttons for tools related to existing shapes are:

  - Selection tool
  - Move tool
  - Closest points tool

#### The three buttons for shape addition tools are:

  - Add triangle tool
  - Add square tool
  - Add hexagon tool

## Built With
   - React
   - TypeScript
   - Redux

## Design
   - I used Redux for global state management and Drag/Drop for shape manipulation.
   - I divided the full problem into two parts: a toolbar and an editor.

## Likes/Dislikes
   - I liked dividing my problem into different parts.
   - I enjoyed using Redux for my state management.
   - I created custom shapes without using any libraries.
   - I did not use any libraries for styling.
## Technologies and Approaches
   - React with typeScript
   - ReduxToolkit
