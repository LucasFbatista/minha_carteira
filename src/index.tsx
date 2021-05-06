import React from 'react';
import ReactDOM from 'react-dom';


import { ThemeProvinder } from './hooks/theme';
import { AuthProvinder } from './hooks/auth';


import App from './app';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvinder>
      <AuthProvinder>
        <App />
      </AuthProvinder>
    </ThemeProvinder>
  </React.StrictMode>,
  document.getElementById('root')
);
