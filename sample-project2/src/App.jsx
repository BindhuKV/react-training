import React from 'react'
import { ThemeProvider, useTheme } from './components/ThemeContext'
import ThemeToggle from './components/ThemeToggle'
import './css/App.css'

const AppContent = () => {
  const { theme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>Theme Toggle App</h1>
      <ThemeToggle />
      <p>Current theme: {theme}</p>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
