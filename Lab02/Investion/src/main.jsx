import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './components/investion.css'
import Investion from './components/investion'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Investion />
  </StrictMode>,
)
