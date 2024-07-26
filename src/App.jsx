import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Content from './Content';
import StartLearning from './StartLearning';
import NavBar from './NavBar';
// import Topic from './Topic';
import Getdata from './Getdata';
import Signup from './Signup';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><NavBar/><Home /><Content /></>} />
        <Route path="/start-learning" element={<><NavBar/><StartLearning/></>} />
        <Route path="/start-learning-python" element={<><NavBar/><Getdata prop = 'python'/></>} />
        <Route path="/start-learning-cpp" element={<><NavBar/><Getdata prop = 'cpp'/></>} />
        <Route path="/start-learning-swift" element={<><NavBar/><Getdata prop = 'swift'/></>} />
        <Route path="/login" element={<><NavBar/><Signup/></>} />
      </Routes>
    </Router>
  );
}

export default App;
