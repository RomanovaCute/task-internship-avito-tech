import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { Layout } from './components/layout/Layout';
import { Homepage } from './components/pages/homepage/Home';
import { NotFound } from './components/pages/notfoundpage/NotFound';
import { Detail } from './components/pages/detailspage/Details';

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { get } from './store/actions/news-actions'


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(get())
  }, [])

  useEffect(() => {
    setInterval(() => {
      dispatch(get())
    }, 60000)
  }, [])

  return (
      <Router>
        <div className='App'>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route exact path='task-internship-avito-tech' element={<Homepage />} />
              <Route path='/item/:id' element={<Detail/>} />
              <Route path='*' element={<NotFound/>}/>
            </Route>
          </Routes>
        </div>
      </Router>
    
  );
}

export default App;
