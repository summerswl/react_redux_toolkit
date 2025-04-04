/**
 * Initializes the React application by creating a root element and rendering the main App component.
 * The App component is wrapped with React.StrictMode for highlighting potential issues
 * and with the Redux Provider to make the Redux store available to the entire component tree.
 *
 * @constant {ReactDOM.Root} root - The root element for rendering the React application.
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
