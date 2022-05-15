import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route

} from 'react-router-dom'
import Layout from './Layout'
import CharacterList from './screens/CharacterList'
import CharacterPage from './screens/CharacterPage'

function App () {
  return (
    <div className="App">
        <BrowserRouter>
            <Layout>
        <Routes>
             <Route path="/character/:id" element={<CharacterPage />} />
            <Route path="/pag:page" element={<CharacterList />} />
            <Route path="/" element={<CharacterList />} />
        </Routes>
            </Layout>
        </BrowserRouter>
    </div>
  )
}

export default App
