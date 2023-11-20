import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Bill from './pages/Bill';
import Preview from './pages/Preview';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route
            path='/'
            element={<Home datePick='11/12/2023' amount={4455} />}
          />
          <Route path='/bill/:id' element={<Bill />} />
          <Route path='/preview' element={<Preview />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
