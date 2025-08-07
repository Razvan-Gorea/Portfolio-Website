import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./index.css"

import '@fontsource/inter' // Defaults to weight 400 (regular)
import '@fontsource/inter/500.css' // Medium weight
import '@fontsource/inter/600.css' // Semi-bold weight
import '@fontsource/inter/700.css' // Bold weight

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

setTimeout(() => {
  document.getElementById('root').classList.add('loaded')
}, 100)