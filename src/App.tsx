// Dependencies
import * as React from 'react'
import { Router } from '@reach/router'
import type { RouteComponentProps } from '@reach/router'

// Internals
import Home from './pages'

const HomePage = (props: RouteComponentProps) => <Home {...props} />

export default function App() {
  return (
    <Router>
      <HomePage path="/" />
    </Router>
  )
}
