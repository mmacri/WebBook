import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent';

const App: React.FC = () => {
    return (
        <div className="App">
            <h1>Welcome to the Vite React App</h1>
            <MyComponent />
        </div>
    );
};

export default App;