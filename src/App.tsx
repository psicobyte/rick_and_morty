import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route

} from 'react-router-dom'
import Layout from './Layout'
import CharacterList from './screens/CharacterList'
import CharacterPage from './screens/CharacterPage'
import LocationList from './screens/LocationList'
import LocationPage from './screens/LocationPage'

function App () {
  return (
    <div className="App">
        <BrowserRouter>
            <Layout>
        <Routes>
            <Route path="/character/:id" element={<CharacterPage />} />
            <Route path="/locations/" element={<LocationList />} />
            <Route path="/location/:id" element={<LocationPage />} />
            <Route path="/locations/pag:page" element={<LocationList />} />
            <Route path="/pag:page" element={<CharacterList />} />
            <Route path="/" element={<CharacterList />} />
        </Routes>
            </Layout>
        </BrowserRouter>
    </div>
  )
}

export default App
