#Slider

# Create React App

<img alt="Logo" align="right" src="https://create-react-app.dev/img/logo.svg" width="20%" />

Create React apps with no build configuration.

- [Creating an App](#creating-an-app) – How to create a new app.
- [User Guide](https://facebook.github.io/create-react-app/) – How to develop apps bootstrapped with Create React App.

Create React App works on macOS, Windows, and Linux.<br>
If something doesn’t work, please [file an issue](https://github.com/facebook/create-react-app/issues/new).<br>
If you have questions or need help, please ask in [GitHub Discussions](https://github.com/facebook/create-react-app/discussions).

## Quick Overview

```sh
npx create-react-app my-app
cd my-app
npm start
```

## Installation of Carousel from react-bootstrap

```sh
npm install react-bootstraop bootstrap
npm start
```

In your `src/App.js` file you can now include React Framework components by adding the code:

``` js
import React from 'react';
import Carousel from "react-bootstrap/Carousel"

function App() {
  return (
    <div className="App">
    <Carousel>
     {/*Fall*/}
      <Carousel.Item>
      <img className="d-block w-100" src={require("./Images/Fall.jpg")} 
      alt="Fall Image" style={{height: "100vh"}}
      />
      <Carousel.Caption>
      <h3>First Slide</h3>
      <p>Fall</p>
      </Carousel.Caption>
      ...
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default App;
```
In your `src/index.js` file you should add bootstrap CSS framework

```js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
```

If you don't want the whole framework, you can just `@include` specific [parts](scss) - e.g. `@include vf-b-forms`.

## Local development

In the project directory, you can run:

### `./run`

This will start up an interactive development & testing environment listing all components.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `./run test`

Launches the test runner in the interactive watch mode.<br>

### `./run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.
