import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './pages/Home';
import Bill from './pages/Bill';
import Preview from './pages/Preview';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
