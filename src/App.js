import { BrowserRouter as Router, Routes, Route } from 'react=router-dom'

function App() {
  return (
    <Router>
        <div className="App">
              <Routes>
                <Route></Route>
                <Route></Route>
              </Routes>
        </div>
    </Router>   
  );
}

export default App;


// you need to wrap entire app in the browser router, and wrap all routse in <Routes> 