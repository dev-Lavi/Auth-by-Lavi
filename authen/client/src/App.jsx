import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Signup from './Components/Signup'

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/Signup" element={<Signup />}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App;
