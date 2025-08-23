import React from 'react';
import ReactDOM from 'react-dom/client';
import PageRemote from './components/PageRemote';
import App from "./components/App";

window.remote_app = {
  PageRemote
};

const root = ReactDOM.createRoot(document.getElementById('rootRemote'));
root.render(<App />);