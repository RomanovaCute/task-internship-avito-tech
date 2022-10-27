import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Layout from './components/layout/Layout';
import Homepage from './components/pages/homepage/Home';

import {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {get} from './store/actions/news-actions'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get())
  }, [])

  return (
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route exact path='/' element={<Homepage />} />
              {/* <Route path='page' element={<News/>}/> */}
            </Route>
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
