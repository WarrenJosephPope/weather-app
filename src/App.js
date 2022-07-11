import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Form } from './components/Form'
import { Details } from './components/Details'

function App() {
  return (
    <div className='container-fluid'>
    <Router>
      <Routes>
          <Route path='/' element={<Form />}>
            <Route path='/:cityName' element={<Details/>} />
          </Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
