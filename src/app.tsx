import { Routes, Route } from 'react-router-dom'
import { Onboarding } from '@/pages/onboarding'
import { SignUpDone } from '@/pages/signup-done'
import { SignUp } from '@/pages/signup'
import './app.scss'

function App() {
  return (
    <>
      <div className="border" />
      <div className="app">
        <Routes>
          <Route path="/">
            <Route index element={<Onboarding />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signup-done" element={<SignUpDone />} />
          </Route>
        </Routes>
      </div>
      <div className="border" />
    </>
  )
}

export default App
