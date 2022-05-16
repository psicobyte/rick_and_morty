import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import styles from 'syles.module.css'
import './assets/css/default_styles.css'
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
