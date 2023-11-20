import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { LetterContextProvider } from 'context/letter.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <LetterContextProvider>
        <App />
    </LetterContextProvider>
);

reportWebVitals();