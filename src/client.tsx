import React from 'react'
import ReactDOM from 'react-dom'
import { App } from '@/app'
import { BrowserRouter } from 'react-router-dom'
import serviceWorkerRegister from './registerSW'

if (process.env.NODE_ENV === 'production') {
  serviceWorkerRegister()
}

const app: HTMLElement | null = document.getElementById('app')
if (app) {
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    app
  )
}
