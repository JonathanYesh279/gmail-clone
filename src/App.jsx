import { HashRouter as Router, Route, Routes } from "react-router-dom"

import { Home } from "./pages/Home.jsx" 
import { About } from "./pages/About.jsx"
import { EmailIndex } from "./pages/EmailIndex.jsx"

import { AppHeader } from "./cmps/AppHeader.jsx"


export function App() {
    return (
      <Router>
        <div className="app-container">
          <AppHeader />
                <main className="main-container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/emails' element={<EmailIndex />} />
              <Route path='/emails/inbox' element={<EmailIndex />} />
              <Route path='/emails/starred' element={<EmailIndex />} />
              <Route path='/emails/sent' element={<EmailIndex />} />
              <Route path='/emails/drafts' element={<EmailIndex />} />
            </Routes>
          </main>
        </div>
      </Router>
    );
}

