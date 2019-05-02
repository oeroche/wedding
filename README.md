🍲#React Webapp Boilerplate

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

##Getting started
_You must have <npm/> installed globally before you begin_
_You also must have a repo for your project on Possible Future’s Github._
_If you don’t know how to do it or don’t have the access, ask your tech-lead._

*1. Download this project*
Open Terminal and change the current working directory to the location where you want the cloned directory to be made.
Then run
`git clone git@github.com:frenchbureau/react-webapp-boilerplate.git`

*2. Edit your directory name*
Change the name of the boilerplate directory to the new project name you created on Step 0.

*3. Set up a new project origin*
Next, `cd` into the project run the following in the command lines:
```git remote rm origin
git remote add origin [YOUR_PROJECT_ADDRESS]
git config master.remote origin
git config master.merge refs/heads/master```

*4. Install dependencies*
Next run in the command line:
`npm install`

*5. Edit your project’s data*
Finally, update the metadata and config defaults to how you want them for your project in <config.js>

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
