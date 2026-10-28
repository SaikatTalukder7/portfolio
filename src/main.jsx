// Entry point of the app.
// This file mounts the <App /> component into the "root" div in index.html.
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './animations.css' // sob animation ekhane (Skills chara)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
