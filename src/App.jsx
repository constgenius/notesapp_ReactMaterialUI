import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </Router>
  );
}

export default App;

