
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserDetails, Users } from './components';


function App() {
  return (
    <Router>
      <Routes>
       <Route exact path="/" element={<Users />} />
       <Route exact path="/user/:id" element={<UserDetails />} />
     </Routes>
    </Router>
  );
}

export default App;
