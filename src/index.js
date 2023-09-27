import React from 'react'
import { createRoot } from 'react-dom/client'
import HomePage from './home'

const container = document.getElementById('trunk')
const root = createRoot(container)

root.render(<HomePage />)