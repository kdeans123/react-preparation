import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages//Home';
import Posts from './pages/Posts'

function App() {
  return (
    <Router>
        <div className="App">
              <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path=":id" element={<Posts />}></Route>
              </Routes>
        </div>
    </Router>   
  );
}

export default App;


// you need to wrap entire app in the browser router, and wrap all routse in <Routes> 
// for dynamic route is the parent of the home path=":id"
// in react we need to ass an element for routing to happen and this is going be be our componenet, we gonna call it Home component and we need to make Home component 
// so we go to src and create a component

// USE CASE: CAPTURE ID:  how to capture id and print it, head over to posts.jsx, 