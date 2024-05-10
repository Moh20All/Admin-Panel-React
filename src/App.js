import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Requests from "./pages/Requests";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Insert from "./pages/Insert";
function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/requests" element={<Requests/>} />
        <Route path="/insert/:id" element={<Insert/>} />
      </Routes>
    </Router>
  );
}

export default App;
