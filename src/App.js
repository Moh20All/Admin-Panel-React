import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Requests from "./pages/Requests";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Insert from "./pages/Insert";
import Refuse from "./pages/Refuse"
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/requests" element={<Requests/>} />
        <Route path="/insert/:id" element={<Insert/>} />
        <Route path="/refuse/:id" element={<Refuse/>} />
      </Routes>
    </Router>
  );
}

export default App;
