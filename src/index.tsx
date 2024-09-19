import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Your main styles (if any)
import './tailwind.css'; // Import Tailwind styles here
import App from './app';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: You can keep this for performance measurement
reportWebVitals();
